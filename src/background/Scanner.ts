import browser from 'webextension-polyfill';

import { Fetch_Data, ParsedTransaction } from '../types/scanner';
import getStorageData from '../utils/tools/getStorageData';
import setStorageData from '../utils/tools/setStorageData';

import { API_KEY } from './constants/constants';

export default class Scanner {
  name: string;
  transactions: ParsedTransaction[];
  hashOfPrintedTransaction: string;
  constructor() {
    this.name = 'transactions';
    this.transactions = [];
    this.hashOfPrintedTransaction = '';
  }

  setPrintedTransaction(data): void {
    const { transactionHash } = data.request.data;
    this.hashOfPrintedTransaction = transactionHash;
  }

  async getSavedTransactions(): Promise<void> {
    const dataCashed: string | undefined = await getStorageData(this.name);
    if (!dataCashed) return;
    this.transactions = JSON.parse(dataCashed);
  }

  async clearAllTransactions(): Promise<void> {
    await browser.storage.local.remove(this.name);
  }

  checkIfTransactionAlreadyExist(hashValue: string): boolean {
    return !!this.transactions.find((item) => item.hashValue === hashValue);
  }

  async saveTransaction(parsedData: ParsedTransaction): Promise<void> {
    this.transactions.push(parsedData);
    await this.clearAllTransactions();
    await setStorageData(this.name, JSON.stringify(this.transactions));
  }

  async deleteTransactions({ request }): Promise<void> {
    await this.clearAllTransactions();
    const { savedTransactions } = request.data;
    await setStorageData(this.name, JSON.stringify(savedTransactions));
  }

  parseTransaction(transaction) {
    return {
      accountFrom: transaction.ownerAddress,
      accountTo: transaction.toAddress,
      transferredValue: transaction.trc20TransferInfo[0].amount_str/1000000,
      hashValue: transaction.hash,
      resultValue: transaction.contractRet,
      confirmedValue: transaction.confirmed,
      timeRange: new Date(transaction.timestamp),
      blockValue: transaction.block,
      feeLimit: transaction.fee_limit,
      costValues: {
        netFee: transaction.cost.net_fee,
        energyTotal: transaction.cost.energy_usage_total,
      },
      transactionSymbol: transaction.transfersAllList[0].symbol,
      transferredStatus: transaction.confirmed ? 'transferred' : 'not transferred',
      confirmedStatus: transaction.confirmed ? 'confirmed' : 'not confirmed',
    };
  }

  async showExistingTransaction(transactionHash: string, tabId: string): Promise<void> {
    const existingTransaction = this.transactions.find((transaction) => transaction.hashValue === transactionHash);
    await chrome.runtime.sendMessage(tabId, {
      action: 'displayExistingTransaction',
      data: existingTransaction,
    });
  }

  async getTransactionToPrint(): Promise<void> {
    const [activeTab] = await browser.tabs.query({ active: true, currentWindow: true });
    const tabId = activeTab.id;
    const foundTransaction = this.transactions.find((transaction) => transaction.hashValue === this.hashOfPrintedTransaction);
    await chrome.tabs.sendMessage(tabId, {
      action: 'savePdfTransaction',
      data: {
        transaction: foundTransaction,
      }
    });
  }

  async openPdfWindow({ request }): Promise<void | boolean> {
    const { hashValue, locale } = request.data;
    const foundTransaction = this.transactions.find((transaction) => transaction.hashValue === hashValue);
    if (!foundTransaction?.hashValue) return false;
    foundTransaction['locale'] = locale;
    const dataString = JSON.stringify(foundTransaction);
    browser.windows.create({ url: `./content/content.html?${encodeURIComponent(dataString)}` });
  }

  async fetchTransactionData(data: Fetch_Data): Promise<void> {
    const { request, sender } = data;
    const url: string = `https://apilist.tronscanapi.com/api/transaction-info?hash=${request.data.hash}`;
    fetch(url, { headers: { 'TRON-PRO-API-KEY': API_KEY }})
      .then(response => response.json())
      .then(async (transaction) => {
        const tabId: string = sender.id;
        if (!transaction.contractRet) {
          await chrome.runtime.sendMessage(tabId, {
            action: 'displayError',
          });
          return ;
        }
        const parsedTransaction = this.parseTransaction(transaction);
        const transactionExist = this.checkIfTransactionAlreadyExist(parsedTransaction.hashValue);
        if (transactionExist) {
          await this.showExistingTransaction(transaction.hash, tabId);
          return ;
        };
        await this.saveTransaction(parsedTransaction);
        await chrome.runtime.sendMessage(tabId, {
          action: 'saveData',
          data: parsedTransaction,
        });
      })
      .catch(error => console.error(error));
  }
}

import browser from 'webextension-polyfill';

import { Fetch_Data, ParsedTransaction } from '../types/scanner';
import getStorageData from '../utils/tools/getStorageData';
import setStorageData from '../utils/tools/setStorageData';

import { API_KEY } from './constants/constants';

export default class Scanner {
  name: string;
  transactions: ParsedTransaction[];
  constructor() {
    this.name = 'transactions';
    this.transactions = [];
  }

  async getSavedTransactions(): Promise<void> {
    const dataCashed: string | undefined = await getStorageData(this.name);
    if (!dataCashed) return;
    this.transactions = JSON.parse(dataCashed);
  }

  checkIfTransactionAlreadyExist(hashValue: string): boolean {
    return !!this.transactions.find((item) => item.hashValue === hashValue);
  }

  async saveTransaction(parsedData: ParsedTransaction): Promise<void> {
    this.transactions.push(parsedData);
    await browser.storage.local.remove(this.name);
    await setStorageData(this.name, JSON.stringify(this.transactions));
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
    };
  }

  async fetchTransactionData(data: Fetch_Data): Promise<void> {
    const { request } = data;
    const url: string = `https://apilist.tronscanapi.com/api/transaction-info?hash=${request.data.hash}`;
    fetch(url, { headers: { 'TRON-PRO-API-KEY': API_KEY }})
      .then(response => response.json())
      .then(async transaction => {
        const parsedTransaction = this.parseTransaction(transaction);
        const transactionExist = this.checkIfTransactionAlreadyExist(parsedTransaction.hashValue);
        if (transactionExist) return;
        await this.saveTransaction(parsedTransaction);
      })
      .catch(error => console.error(error));
  }
}

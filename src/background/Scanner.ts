import browser from 'webextension-polyfill';

import { FETCH_DATA } from '../types/scanner';
import getStorageData from '../utils/tools/getStorageData';
import setStorageData from '../utils/tools/setStorageData';

import { API_KEY } from './constants/constants';


export default class Scanner {


  async checkIfTransactionAlreadyExist(hashValue: string): Promise<boolean> {
    const dataCache = await getStorageData<{data: string | undefined }>(hashValue);
    return !!dataCache;
  }

  async saveTransaction(hashValue: string, stringifiedData: string): Promise<void> {
    const transactionExist = await this.checkIfTransactionAlreadyExist(hashValue);
    if (transactionExist) return ;
    await setStorageData(hashValue, stringifiedData);
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

  async fetchTransactionData(data: FETCH_DATA): Promise<void> {
    const { request } = data;
    const url: string = `https://apilist.tronscanapi.com/api/transaction-info?hash=${request.data.hash}`;
    fetch(url, { headers: { 'TRON-PRO-API-KEY': API_KEY }})
      .then(response => response.json())
      .then(async transaction => {
        const parsedTransaction = this.parseTransaction(transaction);
        await this.saveTransaction(parsedTransaction.hashValue, JSON.stringify(parsedTransaction));
      })
      .catch(error => console.error(error));
  }
}

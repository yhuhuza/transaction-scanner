import { defineStore } from 'pinia';

import { ParsedTransaction, TransactionHash } from '../../types/scanner';
import getStorageData from '../../utils/tools/getStorageData';
import sendContentMessage from '../../utils/tools/sendContentMessage';

export const useTransactionsStore = defineStore<
  'transactions',
  {
    savedTransactions: ParsedTransaction[] | [];
    lastTransaction: ParsedTransaction | null;
    madeQuery: boolean;
  },
  Record<never, never>,
  {
    setTransaction(lastTransaction: ParsedTransaction): Promise<void>
    setQueryTimeout(): void,
    getSavedTransactions(): Promise<void>,
  }
>('transactions', {
  state: () => ({
    savedTransactions: [],
    lastTransaction: null,
    madeQuery: false,
  }),
  actions: {
    async setTransaction(lastTransaction) {
      if (!lastTransaction?.hashValue) this.setQueryTimeout();
      this.lastTransaction = lastTransaction;
      this.savedTransactions.push(lastTransaction);
    },
    async getSavedTransactions() {
      const chachedTransactions: string | undefined 
        = await getStorageData('transactions');
      this.savedTransactions =  JSON.parse(chachedTransactions);
    },
    setQueryTimeout() {
      this.madeQuery = true;
      setTimeout(() => {
          this.madeQuery = false;
      }, 3000);
    }
  },
});

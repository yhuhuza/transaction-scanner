import { defineStore } from 'pinia';

import { ParsedTransaction } from '../../types/scanner';
import getStorageData from '../../utils/tools/getStorageData';

export const useTransactionsStore = defineStore<
  'transactions',
  {
    savedTransactions: ParsedTransaction[] | null;
    lastTransaction: ParsedTransaction | null;
    madeQuery: boolean;
  },
  Record<never, never>,
  {
    setLastTransaction(lastTransaction: ParsedTransaction): Promise<void>
    setSavedTransaction(savedTransactions: ParsedTransaction[]): Promise<void>
    setQueryTimeout(): void,
    getSavedTransactions(): Promise<void>,
  }
>('transactions', {
  state: () => ({
    savedTransactions: null,
    lastTransaction: null,
    madeQuery: false,
  }),
  actions: {
    async setLastTransaction(lastTransaction) {
      this.lastTransaction = lastTransaction;
    },
    async setSavedTransaction(savedTransactions) {
        this.savedTransactions = savedTransactions;
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

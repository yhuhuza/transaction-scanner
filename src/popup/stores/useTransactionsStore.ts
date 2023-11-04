import { defineStore } from 'pinia';

import { ParsedTransaction } from '../../types/scanner';
import getStorageData from '../../utils/tools/getStorageData';

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
      const alreadyInList = !!this.savedTransactions.find((item) => 
        item.hashValue === lastTransaction.hashValue
      );
      if (alreadyInList) return ;
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

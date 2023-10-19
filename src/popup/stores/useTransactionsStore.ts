import { defineStore } from 'pinia';

import { ParsedTransaction } from '../../types/scanner';

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
    setQueryTimeout(): void
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
    setQueryTimeout() {
      this.madeQuery = true;
      setTimeout(() => {
          this.madeQuery = false;
      }, 3000);
    }
  },
});

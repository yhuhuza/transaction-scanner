import { defineStore } from 'pinia';


import { ParsedTransaction } from '../../types/scanner';
import getStorageData from '../../utils/tools/getStorageData';
import sendContentMessage from '../../utils/tools/sendContentMessage';

export const useTransactionsStore = defineStore<
  'transactions',
  {
    savedTransactions: ParsedTransaction[] | [];
    lastTransaction: ParsedTransaction | null;
    madeQuery: boolean;
    choosenOptions: string;
  },
  Record<never, never>,
  {
    setTransaction(lastTransaction: ParsedTransaction): Promise<void>
    setQueryTimeout(): void,
    getSavedTransactions(): Promise<void>,
    setOptionValue(value: string): void,
    deleteTransactions(transactions: string[]): void,
  }
>('transactions', {
  state: () => ({
    savedTransactions: [],
    lastTransaction: null,
    madeQuery: false,
    choosenOptions: '',
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
    setOptionValue(value) {
      this.choosenOptions = value;
    },
    async deleteTransactions(transactions) {
      this.savedTransactions = this.savedTransactions.filter(transaction => !transactions.includes(transaction.hashValue));
      console.log('Saved', this.savedTransactions);
      await sendContentMessage({action: 'deleteTransactions', data: { savedTransactions: this.savedTransactions }});
    },
    setQueryTimeout() {
      this.madeQuery = true;
      this.lastTransaction = null;
      setTimeout(() => {
          this.madeQuery = false;
      }, 3000);
    }
  },
});

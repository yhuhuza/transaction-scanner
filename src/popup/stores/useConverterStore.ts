import { defineStore } from 'pinia';

export const useConverterStore = defineStore<
  'converter',
  {
    coin: string | null;
    fiat: string | null;
  },
  Record<never, never>,
  {
    setCoin(coin: string): void;
  }
>('converter', {
  state: () => ({
    coin: 'USDT',
    fiat: 'USD'
  }),
  actions: {
    setCoin(coin) {
      this.coin = coin;
      localStorage.setItem("converter", coin);
    },
  },
});

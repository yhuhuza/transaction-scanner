import { defineStore } from 'pinia';

export const useConverterStore = defineStore<
  'converter',
  {
    coin: string | null;
    fiat: string | null;
  },
  Record<never, never>,
  {
    init(): Promise<void>;
    setValue(value: string, valueType: string): void;
  }
>('converter', {
  state: () => ({
    coin: 'USDT',
    fiat: 'USD'
  }),
  actions: {
    async init() {
        this.coin = localStorage.getItem("coin");
        if (!this.coin) this.coin = 'USDT';
        this.fiat = localStorage.getItem("fiat");
        if (!this.fiat) this.fiat = 'USD';
    },
    setValue(value, valueType) {
        if (valueType === 'coin') {
            this.coin = value;
        } else {
            this.fiat = value;
        }
      localStorage.setItem(valueType, value);
    },
  },
});

import { defineStore } from 'pinia';

export const useConverterStore = defineStore<
  'converter',
  {
    coinName: string | null;
    fiatName: string | null;
    coinValue: number | null;
    fiatValue: number | null;
  },
  Record<never, never>,
  {
    initNames(): Promise<void>;
    setName(value: string, valueType: string): void;
    setValue(value: number, valueType: string): void;
  }
>('converter', {
  state: () => ({
    coinName: 'USDT',
    fiatName: 'USD',
    coinValue: 1,
    fiatValue: 1,
  }),
  actions: {
    async initNames() {
        this.coinName = localStorage.getItem("coin");
        if (!this.coinName) this.coinName = 'USDT';
        this.fiatName = localStorage.getItem("fiat");
        if (!this.fiatName) this.fiatName = 'USD';
    },
    setName(value, valueType) {
        if (valueType === 'coin') {
            this.coinName = value;
        } else {
            this.fiatName = value;
        }
      localStorage.setItem(valueType, value);
    },
    setValue(value, valueType) {
        if (valueType === 'coin') {
            this.coinValue = value;
        } else {
            this.fiatValue = value;
        }
    }
  },
});

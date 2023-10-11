import { defineStore } from 'pinia';

export const useNetworkStore = defineStore<
  'network',
  {
    network: string | null;
  },
  Record<never, never>,
  {
    init(): Promise<void>;
    setNetwork(network: string): void;
  }
>('network', {
  state: () => ({
    network: 'Choose your token',
  }),
  actions: {
    async init() {
      this.network = localStorage.getItem("network");
    },
    setNetwork(network) {
      this.network = network;
      localStorage.setItem("network", network);
    },
  },
});

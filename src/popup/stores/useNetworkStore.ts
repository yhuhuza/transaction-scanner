import { defineStore } from 'pinia';

export const useNetworkStore = defineStore<
  'network',
  {
    network: string | null;
  },
  Record<never, never>,
  {
    setNetwork(network: string): void;
  }
>('network', {
  state: () => ({
    network: 'Choose your token',
  }),
  actions: {
    setNetwork(network) {
      this.network = network;
    },
  },
});

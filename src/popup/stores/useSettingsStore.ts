import { defineStore } from 'pinia';

export const useSettingsStore = defineStore<
  'settings',
  {
    isDark: boolean;
  },
  Record<never, never>,
  {
    init(): Promise<void>;
  }
>('settings', {
  state: () => ({
    isDark: false,
  }),
  actions: {
    async init() {
      this.isDark = !!localStorage.getItem("isDark");
    },
  },
});

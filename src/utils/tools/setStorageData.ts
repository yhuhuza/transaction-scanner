import browser from 'webextension-polyfill';

export default async (key: string, value: string): Promise<void> => {
  try {
    await browser.storage.local.set({ [key]: value });
  } catch (e) {
    if (browser.runtime.lastError?.message) {
      return Promise.reject(new Error(`Error in storage.set: ${browser.runtime.lastError.message}`));
    }
  }
};
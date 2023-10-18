import browser from 'webextension-polyfill';

const getStorageData = async <T>(key: string): Promise<T | undefined>  => {
  const { [key]: data } = await browser.storage.local.get(key);
  return data;
};

export default getStorageData;
import browser from 'webextension-polyfill';

import { AllowedType } from '../types/methodsKEys';

import Scanner from './Scanner';

const scaner = new Scanner();
scaner.showInstallation();

browser.runtime.onMessage.addListener(async (request: AllowedType, sender) => {
  if (typeof scaner[request.action] === 'function') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return scaner[request.action]({ request, sender }) as Promise<unknown>;
  } else {
      return true;
  }
});
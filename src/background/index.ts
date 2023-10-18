import browser from 'webextension-polyfill';

import { AllowedType, SenderInformation } from '../types/methodsKeys';

import Scanner from './Scanner';

const scaner = new Scanner();

browser.runtime.onMessage.addListener(async (request: AllowedType, sender: SenderInformation) => {
  if (typeof scaner[request.action] === 'function') {
      return scaner[request.action]({ request, sender }) as Promise<unknown>;
  } else {
      return true;
  }
});
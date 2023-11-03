import browser from 'webextension-polyfill';

import { AllowedType, SenderInformation } from '../types/methodsKeys';
import { ParsedTransaction } from '../types/scanner';

import Scanner from './Scanner';

const scaner = new Scanner();

(async function getData(): Promise<void> {
  await Promise.all([scaner.getSavedTransactions()]);
})();

browser.runtime.onMessage.addListener(async (request: AllowedType, sender: SenderInformation, sendResponse: ParsedTransaction) => {
  if (typeof scaner[request.action] === 'function') {
      return scaner[request.action]({ request, sender, sendResponse }) as Promise<unknown>;
  } else {
      return true;
  }
});
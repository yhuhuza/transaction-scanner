import browser from 'webextension-polyfill';

import { AllowedType } from '~/src/types/methodsKEys';

const sendContentMessage = <T extends AllowedType>(data: T): Promise<void> => browser.runtime.sendMessage(data);

export default sendContentMessage;
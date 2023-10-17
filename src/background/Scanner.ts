import browser from 'webextension-polyfill';

// import { AllowedType } from '../types/methodsKEys';

import { API_KEY } from './constants/constants';

export default class Scanner {

  constructor() {
    this.showInstallation();
  }

  showInstallation(): void {
    console.log('I am installed');
  }

  async getInformationAboutTransaction(data: any): Promise<void> {
    const { request } = data;
    const url: string = `https://apilist.tronscanapi.com/api/transaction-info?hash=${request.data.hash}`;
    fetch(url, {
      headers: {
        'TRON-PRO-API-KEY': API_KEY
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }
}

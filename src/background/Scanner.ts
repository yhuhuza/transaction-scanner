import browser from 'webextension-polyfill';

export default class Scanner {

  constructor() {
    this.showInstallation();
  }

  showInstallation(): void {
    console.log('I am installed');
  }
}

import BitcoinImage from '../assets/logo/bitcoin-sign.svg';
import GlobeImage from '../assets/logo/globe-sign.svg';
import HelpImage from '../assets/logo/help-sign.svg';
import RubbishImage from '../assets/logo/rubbish-sign.svg';

interface SettingsMenuElements {
  title: string;
  image: string,
  alt: string,  
};

const SETTINGS_MENU: SettingsMenuElements[] = [
  {
    title: 'Choose your language',
    image: GlobeImage,
    alt: 'globe',
  },
  {
    title: 'Delete saved transactions',
    image: RubbishImage,
    alt: 'rubbish',
  },
  {
    title: 'Choose your currency for comparison',
    image: BitcoinImage,
    alt: 'bitcoin',
  },
  {
    title: 'Help & Support',
    image: HelpImage,
    alt: 'help',
  }
];

export {
  SETTINGS_MENU,
};
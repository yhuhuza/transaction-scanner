import BitcoinImage from '../assets/logo/bitcoin-sign.svg';
import GlobeImage from '../assets/logo/globe-sign.svg';
import HelpImage from '../assets/logo/help-sign.svg';
import RubbishImage from '../assets/logo/rubbish-sign.svg';

interface SettingsMenuElements {
  title: string;
  image: string,
  alt: string,  
  path: string,
};

interface NetworkElements {
  id: number;
  title: string;
  net: string;
}

const SETTINGS_MENU: SettingsMenuElements[] = [
  {
    title: 'Choose your language',
    image: GlobeImage,
    alt: 'globe',
    path: 'language',
  },
  {
    title: 'Delete saved transactions',
    image: RubbishImage,
    alt: 'rubbish',
    path: 'delete',
  },
  {
    title: 'Choose your currency for comparison',
    image: BitcoinImage,
    alt: 'bitcoin',
    path: 'currency',
  },
  {
    title: 'Help & Support',
    image: HelpImage,
    alt: 'help',
    path: 'help',
  }
];

const NETWORK_ELEMENTS: NetworkElements[]  = [
  { id: 1, title: 'Bitcoin', net: 'bit' },
  { id: 2, title: 'Thether TRC20', net: 'the' },
  { id: 3, title: 'Ethereum', net: 'eth' },
  { id: 4, title: 'Tether ERC20', net: 'erc' },
  { id: 5, title: 'Tether BEP2', net: 'bep' },
];

export {
  SETTINGS_MENU,
  NETWORK_ELEMENTS,
};
import BitcoinImage from '../assets/logo/bitcoin-sign.svg';
import ChinaLanguage from '../assets/logo/china-language.svg';
import EnglishLanguage from '../assets/logo/english-language.svg';
import GlobeImage from '../assets/logo/globe-sign.svg';
import HelpImage from '../assets/logo/help-sign.svg';
import RubbishImage from '../assets/logo/rubbish-sign.svg';
import RussianLanguage from '../assets/logo/russian-language.svg';

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

interface LanguagesArray {
  id: string;
  img: string;
  title: string;
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
    path: '/cleartransactions',
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

const LANGUAGES_ARRAY: LanguagesArray[]  = [
  {img: EnglishLanguage, title: 'English', id: 'en'},
  {img: RussianLanguage, title: 'Русский', id: 'ru'},
  {img: ChinaLanguage, title: '中国人', id: 'ch'},
];

export {
  SETTINGS_MENU,
  NETWORK_ELEMENTS,
  LANGUAGES_ARRAY
};
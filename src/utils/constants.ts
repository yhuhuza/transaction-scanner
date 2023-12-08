import GitHub from '../assets/git-hub-qr.svg';
import LinkedInLogo from '../assets/linked-in-qr.svg';
import ChinaLanguage from '../assets/logo/china-language.svg';
import EnglishLanguage from '../assets/logo/english-language.svg';
import RussianLanguage from '../assets/logo/russian-language.svg';
import TeleframQr from '../assets/telegram-qr.png';

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

const Y_COORDINATES: number[] = [70, 85, 100, 115, 130, 145, 160, 175, 190];

const TERMS_ON_CHECK: string[] = [
  `Hash: `,
  `Time: `,
  `From: `, 
  `To: `,
  `Transferred: `, 
  `Result: `, 
  `Status: `, 
  `Block: `, 
  `Resources: `,
];

const SOCIAL_MEDIA = [
  {
    text: {
      title: `LinkedIn`,
      xcoordinate: 30,
    },
    image: {
      name: LinkedInLogo,
      formate: "PNG",
      xcoordinate: 20,
    }
  },
  {
    text: {
      title: `Github`,
      xcoordinate: 102,
    },
    image: {
      name: GitHub,
      formate: "SVG",
      xcoordinate: 90,
    }
  },
  {
    text: {
      title: `Telegram`,
      xcoordinate: 160,
    },
    image: {
      name: TeleframQr,
      formate: "PNG",
      xcoordinate: 150,
    }
  }
];

export {
  NETWORK_ELEMENTS,
  LANGUAGES_ARRAY,
  Y_COORDINATES,
  TERMS_ON_CHECK,
  SOCIAL_MEDIA,
};
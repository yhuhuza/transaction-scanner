import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

import ch from '../utils/locales/ch.json';
import en from '../utils/locales/en.json';
import ru from '../utils/locales/ru.json';

import Content from './Content.vue';


const i18n = createI18n({
	legacy: false,
	locale: 'en',
	messages: {
		en,
		ru,
		ch,
	},
});

createApp(Content).use(i18n).mount('#content');
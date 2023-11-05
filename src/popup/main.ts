import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import browser from 'webextension-polyfill';

import { AllowedType } from '../types/methodsKeys';
import ch from '../utils/locales/ch.json';
import en from '../utils/locales/en.json';
import ru from '../utils/locales/ru.json';

import App from './App.vue';
import router from './routes/routes';
import { useNetworkStore } from './stores/useNetworkStore';
import { useTransactionsStore } from './stores/useTransactionsStore';

const pinia = createPinia();
const networkStore = useNetworkStore(pinia);
const transactionsStore = useTransactionsStore(pinia);

browser.runtime.onMessage.addListener(async (request: AllowedType) => {
	if (request.action === 'saveData') {
    	const { data } = request;
    	transactionsStore.setTransaction(data);
	} else if (request.action === 'displayError') {
		transactionsStore.setQueryTimeout();
	}
});

Promise.all([networkStore.init(), transactionsStore.getSavedTransactions()]);

const i18n = createI18n({
	legacy: false,
	locale: 'en',
	messages: {
		en,
		ru,
		ch,
	},
});

createApp(App).use(router).use(pinia).use(i18n).mount('#app');
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

import messages from '../utils/locales/locales';

import App from './App.vue';
import router from './routes/routes';
import { useNetworkStore } from './stores/useNetworkStore';

const pinia = createPinia();
const networkStore = useNetworkStore(pinia);
networkStore.init();

const i18n = createI18n({
	legacy: false,
	locale: 'en',
	messages: {
		messages,
	},
});

createApp(App).use(router).use(pinia).use(i18n).mount('#app');
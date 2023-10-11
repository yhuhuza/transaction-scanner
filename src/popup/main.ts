import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './routes/routes';
import { useNetworkStore } from './stores/useNetworkStore';

const pinia = createPinia();
const networkStore = useNetworkStore(pinia);
networkStore.init();

createApp(App).use(router).use(pinia).mount('#app');

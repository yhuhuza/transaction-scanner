import { createRouter, createWebHistory } from 'vue-router';

import App from '../App.vue';
import LanguageChanger from '../components/LanguageChanger/LanguageChanger.vue';
import SettingsElement from '../components/SettingsElement/SettingsElement.vue';
import TransactionHistory from '../components/TransactionHistory/TransactionHistory.vue';

export default createRouter({
  history: createWebHistory(),
  linkActiveClass: 'open active',
  routes: [
    {
      path: '/index.html',
      component: App,
      meta: { transition: 'fade' },
    },
    {
      path: '/settings',
      component: SettingsElement,
      meta: { transition: 'hide' },
    },
    {
      path: '/language',
      component: LanguageChanger
    },
    {
      path: '/history',
      component: TransactionHistory,
      meta: { transition: 'hide' },
    },
  ],
});
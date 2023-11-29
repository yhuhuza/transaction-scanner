import { createRouter, createWebHistory } from 'vue-router';

import App from '../App.vue';
import ClearTransactions from '../components/ClearTransactions/ClearTransactions.vue';
import LanguageChanger from '../components/LanguageChanger/LanguageChanger.vue';
import SettingsElement from '../components/SettingsElement/SettingsElement.vue';
import TransactionHistory from '../components/TransactionHistory/TransactionHistory.vue';
import ValuesConverter from '../components/ValuesConverter/ValuesConverter.vue';

export default createRouter({
  history: createWebHistory(),
  linkActiveClass: 'open active',
  routes: [
    {
      path: '/index.html',
      component: App,
      meta: { transition: 'fade' },
      children: [
        {
          path: '/history',
          component: TransactionHistory,
          meta: { transition: 'hide' },
        },
      ]
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
      path: '/cleartransactions',
      component: ClearTransactions
    },
    {
      path: '/converter',
      component: ValuesConverter
    },
  ],
});
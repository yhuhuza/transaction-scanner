import { createRouter, createWebHistory } from 'vue-router';

import SettingsElement from '../components/SettingsElement/SettingsElement.vue';

export default createRouter({
  history: createWebHistory(),
  linkActiveClass: 'open active',
  routes: [
    {
      path: '/settings',
      component: SettingsElement,
    },
  ],
});
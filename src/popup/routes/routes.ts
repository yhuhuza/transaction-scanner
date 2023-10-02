import { createRouter, createWebHistory } from 'vue-router';

import HomeElement from '../components/HomeElement/HomeElement.vue';
import SettingsElement from '../components/SettingsElement/SettingsElement.vue';

export default createRouter({
  history: createWebHistory(),
  linkActiveClass: 'open active',
  routes: [
    {
      path: '/index.html',
      component: HomeElement,
    },
    {
      path: '/settings/',
      component: SettingsElement,
    },
  ],
});
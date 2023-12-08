<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

import GoBackElement from '../GoBackElement/GoBackElement.vue';
import ToggleButton from '../ToggleButton/ToggleButton.vue';

import SettingsMenu from './SettingsMenu.vue';

const { t } = useI18n();
</script>

<template>
  <section class="dark:bg-dark-coal border-box">
    <go-back-element :title="t('settings.title')" path="/index.html"></go-back-element>
    <div class="mb-8 flex items-center justify-center">
      <div class="w-7 h-7 mr-5">
        <img class="h-full dark:invert" src="../../../assets/logo/theme-sun.svg" alt="moon" />
      </div>
      <toggle-button></toggle-button>
      <div class="w-7 h-7 ml-5 ">
        <img class="h-full dark:invert" src="../../../assets/logo/theme-moon.svg" alt="moon" />
      </div>
    </div>
    <settings-menu></settings-menu>
  </section>
</template>

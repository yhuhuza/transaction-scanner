<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

import { LANGUAGES_ARRAY } from '../../../utils/constants';
import GoBackElement from '../GoBackElement/GoBackElement.vue';

const { t, locale } = useI18n({ useScope: 'global' });

const definedBorderColor = (langSymbol: string) => {
  return locale.value === langSymbol ? 'border-color: #03B7E2' : '';
};

const localeFromStorage = localStorage?.getItem("locale");
locale.value = !localeFromStorage ? 'en' : localeFromStorage;

const changeLocale = (language: string) => {
  locale.value = language;
  localStorage.setItem("locale", language);
};
</script>

<template>
  <section class="dark:bg-dark-coal border-box">
    <go-back-element :title="t('settings.language.titleLanguage')" path="/settings"></go-back-element>
    <div>
      <h4 class="dark:text-white settings-text mt-11">{{ t('settings.language.chooseLanguage') }}</h4>
      <div class="mt-11">
        <div 
          v-for="item in LANGUAGES_ARRAY"
          :key="item.title"
          class="mb-6 pl-6 py-4 border dark:border-white rounded-2xl flex items-center align-center justify-start"
          :style="definedBorderColor(item.id)"
          @click="changeLocale(item.id)"
        >
          <img class="mr-4" :src="item.img" :alt="item.title">
          <h4 class="dark:text-white settings-text">{{ item.title }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>

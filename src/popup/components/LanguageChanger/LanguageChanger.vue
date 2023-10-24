<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

import ChinaLanguage from '../../../assets/logo/china-language.svg';
import EnglishLanguage from '../../../assets/logo/english-language.svg';
import RussianLanguage from '../../../assets/logo/russian-language.svg';

const { t, locale } = useI18n({ useScope: 'global' });

const changeLocale = (language) => {
  locale.value = language;
};

const LANGUAGES_ARRAY = [
  {img: EnglishLanguage, title: 'English', id: 'en'},
  {img: RussianLanguage, title: 'Русский', id: 'ru'},
  {img: ChinaLanguage, title: '中国人', id: 'ch'},
];
</script>

<template>
  <section class="dark:bg-dark-coal border-box">
    <div class="flex items-center mb-7">
      <router-link class="w-10 h-10" to="/settings" >
        <img class="h-full dark:invert" src="../../../assets/logo/arrow-back.svg" alt="arrow"/>
      </router-link>
      <h2 class="dark:text-white w-full pl-ef heading1 text-black text-xl uppercase">{{ t('settings.language.titleLanguage') }}</h2>
    </div>
    <div>
        <h4 class="dark:text-white settings-text mt-11">{{ t('settings.language.chooseLanguage') }}</h4>
        <div class="mt-11">
            <div 
              v-for="item in LANGUAGES_ARRAY" 
              :key="item.title" 
              class="mb-6 pl-6 py-4 border dark:border-white rounded-2xl flex items-center align-center justify-start"
              @click="changeLocale(item.id)"
            >
                <img class="mr-4" :src="item.img" :alt="item.title">
                <h4 class="dark:text-white settings-text">{{ item.title }}</h4>
            </div>
        </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

import EnglishLanguage from '../../../assets/logo/english-language.svg';
import RussianLanguage from '../../../assets/logo/russian-language.svg';

function trans(labelToTranslate) {
  const { messages, locale } = useI18n();
  const localeMessages = messages.value?.messages?.[locale.value];
  const keys = (labelToTranslate || '').split('.');
  const translatedLabel = keys.reduce((ac, key) => ac?.[key], localeMessages);

  return translatedLabel !== undefined ? translatedLabel : labelToTranslate;
}

const LANGUAGES_ARRAY = [
  {img: EnglishLanguage, title: 'English'},
  {img: RussianLanguage, title: 'Русский'},
];
</script>

<template>
  <section class="dark:bg-dark-coal border-box">
    <div class="flex items-center mb-7">
      <router-link class="w-10 h-10" to="/settings" >
        <img class="h-full dark:invert" src="../../../assets/logo/arrow-back.svg" alt="arrow"/>
      </router-link>
      <h2 class="dark:text-white w-full pl-ef heading1 text-black text-xl uppercase">Language</h2>
    </div>
    <div>
        <h4 class="dark:text-white settings-text mt-11">{{ trans('settings.chooseLanguage') }}</h4>
        <div class="mt-11">
            <div 
              v-for="item in LANGUAGES_ARRAY" 
              :key="item.title" 
              class="mb-6 pl-6 py-4 border rounded-2xl flex items-center align-center justify-start"
            >
                <img class="mr-4" :src="item.img" :alt="item.title">
                <h4 class="settings-text">{{ item.title }}</h4>
            </div>
        </div>
    </div>
  </section>
</template>

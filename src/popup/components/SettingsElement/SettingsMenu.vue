<script lang="ts" setup>
import { ref, Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import BitcoinImage from '../../../assets/logo/bitcoin-sign.svg';
import GlobeImage from '../../../assets/logo/globe-sign.svg';
import HelpImage from '../../../assets/logo/help-sign.svg';
import RubbishImage from '../../../assets/logo/rubbish-sign.svg';

const { t } = useI18n();
const router = useRouter();

interface SettingsMenuElements {
  title: string;
  image: string,
  alt: string,  
  path: string,
};

const SETTINGS_MENU: Ref<SettingsMenuElements[]> = ref([
  {

    title: `${t('settingMenu.language')}`,
    image: GlobeImage,
    alt: 'globe',
    path: 'language',
  },
  {
    title: `${t('settingMenu.delete')}`,
    image: RubbishImage,
    alt: 'rubbish',
    path: '/cleartransactions',
  },
  {
    title: `${t('settingMenu.converter')}`,
    image: BitcoinImage,
    alt: 'bitcoin',
    path: '/converter',
  },
  {
    title: `${t('settingMenu.help')}`,
    image: HelpImage,
    alt: 'help',
    path: '/help',
  }
]);
</script>

<template>
  <section class="mt-12">
    <div 
      v-for="item in SETTINGS_MENU" 
      :key="item.title" 
      class="overflow-hidden border dark:border-white rounded-lg flex 
      items-center mb-6 cursor-pointer w-full h-16 px-3.5"
      @click="router.push(item.path)"
    >
        <div class="w-2/12 h-full mr-2 flex items-center justify-center">
          <img class="w-7 h-7 dark:invert" :src="item.image" :alt="item.alt" />
        </div>
          <p class="flex-start settings-text mr-auto dark:text-white">{{ item.title }}</p>
          <div class="w-2/12 flex items-center justify-center">
            <img class="dark:invert" src="../../../assets/logo/arrow-forward.svg" alt="arrow" />
          </div>
    </div>
  </section>
</template>
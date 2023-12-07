<script lang="ts" setup>
import { useDark } from '@vueuse/core';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import RedSadSmile from '../../../assets/logo/red-sad-smile.svg';
import SadSmile from '../../../assets/logo/sad-smile.svg';

const isDark = useDark();
const { t } = useI18n();

const definedImage = computed(() => {
  return isDark.value ? RedSadSmile : SadSmile;
});
</script>

<template>
  <div class="mt-8 flex flex-col items-center">
    <h3 class="big-semibold-header dark:text-white flex item-center justify-center mb-4">{{ t('details.title') }}</h3>
    <p class="mt-5 mistake-text">{{ t('mistakePage.wentWrong') }}</p>
    <p class="mt-3 dark-regular-text dark:text-white">{{ t('mistakePage.verifyRequest') }}</p>
    <div class="mt-12">
      <img :src="definedImage" alt="sad-smile" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import { useTransactionsStore } from '../../stores/useTransactionsStore.ts';

import ChoosenOption from './ChoosenOptions.vue';

const { t } = useI18n();
const transactionStore = useTransactionsStore();
const choosenOption = ref('');
watch(choosenOption, (newValue) => {
  transactionStore.setOptionValue(newValue);
});

const cancelClearnes = () => {
  choosenOption.value = '';
};
</script>

<template>
  <div class="flex items-center">
    <router-link class="w-10 h-10" to="/settings" >
      <img class="h-full dark:invert" src="../../../assets/logo/arrow-back.svg" alt="arrow"/>
    </router-link>
    <h2 class="dark:text-white w-full pl-7 section-header text-black text-xl uppercase">
      {{ t('delete.removeTransaction') }}
    </h2>
  </div>
  <div class="mb-6">
    <div class="flex items-center dark:text-white mt-11 subheader-text">
      <p>{{ t('delete.period') }}</p>
    </div>
    <div class="mt-4 subheader-text">
      <div class="flex item-center mb-3">
        <input id="all" v-model="choosenOption" class="mr-4" type="radio" name="fav_language" value="all">
        <label for="all" class="dark:text-white">{{ t('delete.allTime') }}</label><br>
      </div>
      <div class="flex item-center">
        <input id="specific" v-model="choosenOption"  class="mr-4" type="radio" name="fav_language" value="specific">
        <label for="specific" class="dark:text-white">{{ t('delete.specifyTime') }}</label><br>
      </div>
    </div>
  </div>
  <ChoosenOption @cancel-clearnes="cancelClearnes()"></ChoosenOption>
</template>

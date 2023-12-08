<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import { useTransactionsStore } from '../../stores/useTransactionsStore';
import GoBackElement from '../GoBackElement/GoBackElement.vue';

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
  <go-back-element :title="t('delete.removeTransaction')" path="/settings"></go-back-element>
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

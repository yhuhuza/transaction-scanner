<script lang="ts" setup>
import { useDark } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

import DarkPlaceholder from '../../../assets/logo/placeholder-dark.png';
import LightPlaceholder from '../../../assets/logo/placeholder-light.png';
import sendContentMessage from '../../../utils/tools/sendContentMessage';
import { useTransactionsStore } from '../../stores/useTransactionsStore';
import MistakePage from '../MistakePage/MistakePage.vue';
import TransactionDetails from '../TransactionDetails/TransactionDetails.vue';

let timerId: any = 0;
const { t } = useI18n();
const transactionStore = useTransactionsStore();
const { lastTransaction, madeQuery } = storeToRefs(transactionStore);
const searchQuery = ref('');
const isDark = useDark({
  selector: "body",
  attribute: "class",
  valueDark: "dark",
  valueLight: "light",
});

const definedPlaceholderImage = computed(() => {
  return isDark.value ? DarkPlaceholder : LightPlaceholder;
});

const handleInput = () => {
  if (timerId) {
    clearTimeout(timerId);
  }

  timerId = setTimeout(() => {
    sendRequestToServer();
  }, 1000);
};

const sendRequestToServer = () => {
  if (!searchQuery.value) return;
  sendContentMessage({ action: 'fetchTransactionData', data: { hash: searchQuery.value } });
};
</script>

<template>
  <div class="mt-8 relative">
    <div class="border dark:border-white border-black rounded-lg w-full flex flex-row py-2.5 px-3.5 h-11 align-center justify-between items-center">
      <input 
        v-model="searchQuery"
        class="dark:bg-black dark:text-white outline-none input-text h-8 w-full"
        type="text"
        :placeholder="t('placeholder.mainPageInput')"
        @input="handleInput"
      >
      <div v-if="!lastTransaction?.hashValue" class="ml-2">
        <img class="cursor-pointer dark:invert" src="../../../assets/logo/search-sign.svg" alr="search" />
      </div>
    </div>
    <div class="w-full h-80 mt-9">
      <transaction-details v-if="lastTransaction?.hashValue"></transaction-details>
      <mistake-page v-else-if="madeQuery"></mistake-page>
      <div v-else class="flex items-center">
        <img class="h-56 mt-6" :src="definedPlaceholderImage" alt="placeholder" />
      </div>
    </div>
    <div class="relative bottom-mtw">
      <router-link to="/history">
        <button class="uppercase button-history mt-4 rounded-lg border-black heading2 w-full h-12 py-2 w-xmax">{{ t('transactionHistory.title') }}</button>
     </router-link>
    </div>
  </div>
</template>

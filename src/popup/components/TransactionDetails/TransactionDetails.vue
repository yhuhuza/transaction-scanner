<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import { useTransactionsStore } from '../../stores/useTransactionsStore';

const { t } = useI18n();
const transactionStore = useTransactionsStore();
const { lastTransaction } = storeToRefs(transactionStore);

const formattedDate = computed(() => new Date(lastTransaction.value?.timeRange));
const TRANSACTION_DETAILS = computed(() => [
  { title: 'Account', data: `${lastTransaction.value?.accountFrom}`, style: '!text-pink' },
  { title: 'Transferred', data: `${lastTransaction.value?.transferredValue} ${lastTransaction.value?.transactionSymbol}`, style: '' },
  { title: 'To', data: `${lastTransaction.value?.accountTo}`, style: '' },
  { title: 'Hash', data: `${lastTransaction.value?.hashValue}`, style: '!text-pink' },
  { title: 'Result', data: `${lastTransaction.value?.resultValue}`, style: '' },
  { title: 'Status', data: `${lastTransaction.value?.transferredStatus}`, style: '' },
  { title: 'Time', data: `${formattedDate.value}`, style: '' }
]);
</script>

<template>
  <div class="mt-8">
    <h3 class="big-semibold-header dark:text-white flex item-center justify-center mb-4">{{ t('details.title') }}</h3>
    <table class="dark-regular-text">
      <tr v-for="item in TRANSACTION_DETAILS" :key="item.title" class="mb-6">
        <td class="w-teh font-semibold dark:text-white">{{ item.title }}</td>
        <td class="dark:text-white" :class="item.style">{{ item.data }}</td>
      </tr>
    </table>
  </div>
</template>
  
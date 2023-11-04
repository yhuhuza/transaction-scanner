<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import { ParsedTransaction } from '../../../types/scanner';
import { useTransactionsStore } from '../../stores/useTransactionsStore';

const { t } = useI18n();
const props = defineProps<{ transaction?: ParsedTransaction }>();
const router = useRouter();
const transactionDetails = ref(props.transaction);
const transactionStore = useTransactionsStore();

const formattedDate = computed(() => {
  const rawDate = new Date(transactionDetails.value?.timeRange);
  if (!rawDate) return '';
  return `${rawDate.getFullYear()}-${rawDate.getMonth()}-${rawDate.getDate()}`;
});

const setLastTransaction = () => {
  transactionStore.setTransaction(transactionDetails?.value);
  router.push('/index.html');
};
</script>

<template>
  <article class="mb-4 border border-neutral-300 p-3 rounded">
    <div class="small-bold-text dark:text-white">{{ formattedDate }}</div>
    <div class="flex items-center justify-between mt-2 dark-semibold-text">
      <span class="dark:text-white">{{ transactionDetails?.transferredStatus }}</span>
      <span class="dark:text-white">{{ transactionDetails?.transferredValue }}</span>
      <span class="dark:text-white">{{ transactionDetails?.transactionSymbol }}</span>
      <span class="dark:text-white">{{ transactionDetails?.resultValue }}</span>
      <span class="dark:text-white">{{ transactionDetails?.confirmedStatus }}</span>
    </div>
    <div class="mt-4 flex items-center justify-between input-text">
      <button class="px-6 py-2 border rounded-lg dark:text-white" @click="setLastTransaction()">{{ t('history.details') }}</button>
      <div
          class="
          download-pdf px-5 py-2 border rounded-lg border-marine dark:text-white
          bg-marine white-bold-text cursor-pointer flex items-center justify-between">
          PDF
      </div>
    </div>
  </article>
</template>

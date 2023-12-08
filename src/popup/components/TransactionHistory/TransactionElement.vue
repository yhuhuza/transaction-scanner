<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import { ParsedTransaction } from '../../../types/scanner';
import sendContentMessage from '../../../utils/tools/sendContentMessage';
import { useTransactionsStore } from '../../stores/useTransactionsStore';

const { t, locale } = useI18n();
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

const downloadPdf = async () => {
  await sendContentMessage({ action: 'openPdfWindow', data: { hashValue: transactionDetails.value?.hashValue, locale: locale.value } });
};

const TRANSACTION_DETAILS = computed(() => [
  transactionDetails.value?.transferredStatus, 
  transactionDetails.value?.transferredValue,
  transactionDetails.value?.transactionSymbol,
  transactionDetails.value?.resultValue,
  transactionDetails.value?.confirmedStatus,
]);
</script>

<template>
  <article class="mb-4 border border-neutral-300 p-3 rounded">
    <div class="small-bold-text dark:text-white">{{ formattedDate }}</div>
    <div class="flex items-center justify-between mt-2 dark-semibold-text">
      <span v-for="item, index in TRANSACTION_DETAILS" :key="index" class="dark:text-white">{{ item }}</span>
    </div>
    <div class="mt-4 flex items-center justify-between input-text">
      <button class="px-6 py-2 border rounded-lg dark:text-white" @click="setLastTransaction()">{{ t('history.details') }}</button>
      <div
        class="
        download-pdf px-5 py-2 border rounded-lg border-marine dark:text-white
        bg-marine white-bold-text cursor-pointer flex items-center justify-between"
        @click="downloadPdf()">
          PDF
      </div>
    </div>
  </article>
</template>

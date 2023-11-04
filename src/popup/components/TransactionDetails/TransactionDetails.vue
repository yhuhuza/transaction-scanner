<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

import { useTransactionsStore } from '../../stores/useTransactionsStore';

const transactionStore = useTransactionsStore();
const { lastTransaction } = storeToRefs(transactionStore);

const formattedDate = computed(() => new Date(lastTransaction.value?.timeRange));
</script>

<template>
  <div class="mt-8">
    <h3 class="big-semibold-header dark:text-white flex item-center justify-center mb-4">Transaction Details</h3>
    <table class="dark-regular-text">
      <tr class="mb-6">
        <td class="w-teh font-semibold dark:text-white">Account</td>
        <td class="text-pink">{{ lastTransaction?.accountFrom }}</td>
      </tr>
      <tr class="mb-6">
        <td class="w-teh font-semibold dark:text-white">Transferred</td>
        <td class="dark:text-white">{{ lastTransaction?.transferredValue }} {{ lastTransaction?.transactionSymbol }}</td>
      </tr>
      <tr class="mb-6">
        <td class="w-teh font-semibold dark:text-white">To</td>
        <td class="dark:text-white">{{ lastTransaction?.accountTo }}</td>
      </tr>
      <tr class="mb-6">
        <td class="w-teh font-semibold dark:text-white">Hash</td>
        <td class="text-pink">{{ lastTransaction?.hashValue }}</td>
      </tr>
      <tr class="mb-6">
        <td class="w-teh font-semibold dark:text-white">Result</td>
        <td class="dark:text-white">{{ lastTransaction?.resultValue }}</td>
      </tr>
      <tr class="mb-6">
        <td class="w-teh font-semibold dark:text-white">Status</td>
        <td class="dark:text-white">{{ lastTransaction?.transferredStatus }}</td>
      </tr>
      <tr class="mb-6">
        <td class="w-teh font-semibold dark:text-white">Time</td>
        <td class="dark:text-white">{{ formattedDate }}</td>
      </tr>
    </table>
  </div>
</template>
  
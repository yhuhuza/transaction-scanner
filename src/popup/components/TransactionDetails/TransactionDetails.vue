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
    <h3 class="big-semibold-header flex item-center justify-center mb-4">Transaction Details</h3>
    <table class="dark-regular-text">
      <tr class="mb-6">
        <td class="w-teh font-semibold">Account</td>
        <td class="text-pink">{{ lastTransaction?.accountFrom }}</td>
      </tr>
      <tr class="mb-6">
        <td class="w-teh font-semibold">Transferred</td>
        <td class="">{{ lastTransaction?.transferredValue }} {{ lastTransaction?.transactionSymbol }}</td>
      </tr>
      <tr class="mb-6">
        <td class="w-teh font-semibold">To</td>
        <td class="">{{ lastTransaction?.accountTo }}</td>
      </tr>
      <tr class="mb-6">
        <td class="w-teh font-semibold">Hash</td>
        <td class="text-pink">{{ lastTransaction?.hashValue }}</td>
      </tr>
      <tr class="mb-6">
        <td class="w-teh font-semibold">Result</td>
        <td class="">{{ lastTransaction?.resultValue }}</td>
      </tr>
      <tr class="mb-6">
        <td class="w-teh font-semibold">Status</td>
        <td class="">{{ lastTransaction?.transferredStatus }}</td>
      </tr>
      <tr class="mb-6">
        <td class="w-teh font-semibold">Time</td>
        <td class="">{{ formattedDate }}</td>
      </tr>
    </table>
  </div>
</template>
  
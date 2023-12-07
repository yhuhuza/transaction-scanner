<script lang="ts" setup>
import { useDark } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { ref, computed, defineEmits } from 'vue';
import { Ref } from 'vue';


import LightTrashBin from '../../../assets/logo/light-trash-picture.svg';
import TrashBin from '../../../assets/logo/trash-picture.svg';
import { useTransactionsStore } from '../../stores/useTransactionsStore';

import TransactionList from './TransactionsList.vue';

const transactionStore = useTransactionsStore();
const transactionList: Ref<string[]> = ref([]);
const emit = defineEmits(['cancelClearnes']);
const isDark = useDark();
const { choosenOptions, savedTransactions } = storeToRefs(transactionStore);
const definedPicture = computed(() => isDark.value ? LightTrashBin : TrashBin);

const manipulateTransaction = (transactionHash: string, checkedInput: Ref<boolean>) => {
  if (checkedInput.value) {
    transactionList.value = transactionList.value.filter(hash => transactionHash != hash);
  } else {
    transactionList.value.push(transactionHash);
  } 
};

const cancelDeletion = () => {
  transactionList.value = [];
  emit('cancelClearnes');
};

const deleteTransactions = async () => {
  if (choosenOptions.value === 'all') {
    await transactionStore.clearAllTransactions();
  }
  await transactionStore.deleteTransactions(transactionList.value);
  cancelDeletion();
};

const definedDeleteText = computed(() => choosenOptions.value === 'all' 
  ? 'Are you sure you want to delete all saved transactions?'
  : 'Are you sure you want to delete choosen transactions?'
);
</script>

<template>
  <div v-if="choosenOptions" class="mt-11 flex items-center flex-col justify-center relative h-4/6">
    <div v-if="choosenOptions === 'all'" class="flex items-center flex-col">
      <div>
        <img :src="definedPicture" alt="trash-bin" /> 
     </div>
    </div>
    <div v-else-if="choosenOptions === 'specific'"  class="flex flex-col justify-between">
        <TransactionList 
          v-for="transaction in savedTransactions" 
          :key="transaction.hashValue" 
          :transaction="transaction" 
          @manipulate-transaction="manipulateTransaction"
        ></TransactionList>
    </div>
    <p class="mt-8 subheader-text text-center dark:text-white">
      {{ definedDeleteText }}
    </p>
    <div class="w-xmax mt-10 flex justify-between bold-subheader-text relative bottom-0">
      <button class="border rounded-lg py-2 px-8 uppercase dark:text-white" @click="cancelDeletion">Cancel</button>
      <button class="border rounded-lg py-2 px-8 bg-redish text-white uppercase dark:text-white" @click="deleteTransactions()">Delete</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { ref, computed, Ref } from 'vue';

const emit = defineEmits(['manipulateTransaction']);
const props = defineProps(['transaction']);
const { transaction } = props;
const checkedInput: Ref<boolean> = ref(false);

const formattedDate = computed(() => {
  const rawDate = new Date(transaction.timeRange);
  if (!rawDate) return '';
  return `${rawDate.getFullYear()}-${rawDate.getMonth()}-${rawDate.getDate()}`;
});

const changeInputStatus = () => {
    emit('manipulateTransaction', transaction.hashValue, checkedInput);
};
</script>

<template>
    <div class="w-xmax h-fit dark-regular-text flex justify-between mb-4">
        <input v-model="checkedInput" type="checkbox" @click="changeInputStatus()"/>
        <span class="small-bold-text">{{ formattedDate }}</span>
        <span>{{ transaction.transferredValue }}</span>
        <span >{{ transaction.transactionSymbol }}</span>
        <span>{{  transaction.resultValue }}</span>
      </div>
</template>
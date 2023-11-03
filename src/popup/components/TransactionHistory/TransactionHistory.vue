<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

import { useTransactionsStore } from '../../stores/useTransactionsStore';

import TransactionElement from './TransactionElement.vue';

const { t } = useI18n();
const router = useRoute();
console.log('Router', router);
const transactionStore = useTransactionsStore();

const { savedTransactions } = storeToRefs(transactionStore);
</script>

<template>
    <div class="flex items-center">
      <router-link class="w-10 h-10" to="/index.html" >
        <img class="h-full dark:invert" src="../../../assets/logo/arrow-back.svg" alt="arrow"/>
      </router-link>
      <h2 class="dark:text-white w-full pl-7 heading1 text-black text-xl uppercase">{{ t('history.title') }}</h2>
    </div>
    <div class="pt-6 pb-2 scroll-auto">
        <TransactionElement
            v-for="item in savedTransactions"
            :key="item.hashValue" 
            class="block" 
            :transaction="item"
        ></TransactionElement>
    </div>
</template>

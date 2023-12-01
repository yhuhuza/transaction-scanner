<script lang="ts" setup>
import { storeToRefs } from 'pinia';

import { useConverterStore } from '../../stores/useConverterStore';

import ConverterBlock from './ConverterBlock.vue';

const coinsList = ['USDT', 'Ethereum', 'Bitcoin'];
const fiatsList = ['USD', 'EUR', 'RUB'];

const converterStore = useConverterStore();
const { coinName, fiatName } = storeToRefs(converterStore);
</script>

<template>
  <section class="dark:bg-dark-coal border-box">
    <div class="flex items-center mb-11">
      <router-link class="w-10 h-10" to="/settings" >
        <img class="h-full dark:invert" src="../../../assets/logo/arrow-back.svg" alt="arrow"/>
      </router-link>
      <h2 class="dark:text-white w-full pl-ef section-header text-black text-xl uppercase">Converter</h2>
    </div>
    <div class="text-center subheader-text">
      Choose your currency for comparison:
    </div>
    <div class="w-full h-64 mt-11 p-1 rounded-2xl values-block background-gradient">
      <div class="w-full h-full box-border rounded-xl bg-white flex flex-col">
        <converter-block :list="coinsList" :type="'coin'"></converter-block>
        <converter-block :list="fiatsList" :type="'fiat'"></converter-block>
      </div>
    </div>
    <p class="settings-text mt-11 text-center">
      The exchange rate of <strong>{{ coinName }}</strong> to <strong>{{ fiatName }}</strong> is $1.00
    </p>
  </section>
</template>
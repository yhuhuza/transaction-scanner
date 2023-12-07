<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { ref, watch, computed, Ref } from 'vue';

import { CONVERTER_KEY } from '../../../background/constants/constants';
import { useConverterStore } from '../../stores/useConverterStore';

import ConverterBlock from './ConverterBlock.vue';

const coinsList = ['USDT', 'ETH', 'BTC'];
const fiatsList = ['USD', 'EUR', 'RUB'];
const fiatSymbol = {
  'USD': '$',
  'EUR': '€',
  'RUB': '₽',
};

const converterStore = useConverterStore();
const { coinName, fiatName } = storeToRefs(converterStore);

const coinRate: Ref<number | unknown> = ref(0);

async function definedCoinRate(): Promise<void> {
  return fetch(`https://min-api.cryptocompare.com/data/price?api_key=
    ${CONVERTER_KEY}&fsym=${coinName.value}&tsyms=${fiatName.value}`)
    .then((result) => result.json())
    .then((data) => {
      if (Object.keys(data).length === 0) return null;
      coinRate.value = (Object.values(data))[0];
    });
};

watch([coinName, fiatName ], () => {
  return definedCoinRate();
});

definedCoinRate();

const definedSymbol = computed(() => fiatSymbol[fiatName?.value]);
</script>

<template>
  <section class="dark:bg-dark-coal border-box">
    <div class="flex items-center mb-11">
      <router-link class="w-10 h-10" to="/settings" >
        <img class="h-full dark:invert" src="../../../assets/logo/arrow-back.svg" alt="arrow"/>
      </router-link>
      <h2 class="dark:text-white w-full pl-ef section-header text-black text-xl uppercase">Converter</h2>
    </div>
    <div class="text-center subheader-text dark:text-white">
      Choose your currency for comparison:
    </div>
    <div class="w-full h-64 mt-11 p-1 rounded-2xl values-block background-gradient">
      <div class="w-full h-full box-border rounded-xl bg-white flex flex-col">
        <converter-block :list="coinsList" :type="'coin'"></converter-block>
        <converter-block :list="fiatsList" :type="'fiat'"></converter-block>
      </div>
    </div>
    <p class="settings-text mt-11 text-center dark:text-white">
      The exchange rate of <strong>{{ coinName }}</strong> to <strong>{{ fiatName }}</strong> 
      is {{ definedSymbol }} {{ coinRate }}
    </p>
  </section>
</template>
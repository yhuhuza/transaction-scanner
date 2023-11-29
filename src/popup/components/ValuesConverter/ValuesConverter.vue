<script lang="ts" setup>
import { storeToRefs } from 'pinia';

import { useConverterStore } from '../../stores/useConverterStore';

import ValuesBlock from './ValuesBlock.vue';

const converterStore = useConverterStore();
const { coin, fiat } = storeToRefs(converterStore);
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

    <div class="values-block h-64 w-full rounded-2xl mt-11 flex align-center justify-center background-gradient">
      <div class="rounded-xl w-full m-1 bg-white flex flex-col">
        <values-block class="h-64 w-full flex-col"></values-block>
      </div>
    </div>
    <p class="settings-text mt-11 text-center">
      The exchange rate of {{ coin }} to {{ fiat }} is $1.00
    </p>
  </section>
</template>
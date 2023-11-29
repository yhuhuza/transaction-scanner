<script lang="ts" setup>
import { useToggle} from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { ref, onMounted } from 'vue';

import { useConverterStore } from '../../stores/useConverterStore';

import ValuesList from './ValuesList.vue';

const converterStore = useConverterStore();
const { coin, fiat } = storeToRefs(converterStore);
const openedCoinList = ref(false);
const openedFiatList = ref(false);
const coinValue = ref(1);
const fiatValue = ref(1);
const coinInput = ref(null);
const coinsList = ['USDT', 'Ethereum', 'Bitcoin'];
const fiatList = ['USD', 'EUR', 'RUB'];

const focusInput = () => {
  if (coinInput.value) {
    coinInput.value.focus();
  }
};

onMounted(focusInput);

const openCoinList = useToggle(openedCoinList);
const openFiatList = useToggle(openedFiatList);
</script>

<template>
  <div>
    <div
      class="h-1/2 coin-block w-full flex justify-between coin-radius-top relative">
      <div class="mt-12 mx-4 cursor-pointer" @mouseenter="openCoinList()" @mouseleave="openCoinList()">
        <p class="download-subheader coin flex align-center">{{ coin }}</p>
        <values-list v-if="openedCoinList" :list="coinsList" :type="'coin'"></values-list>
      </div>
      <div class="input-block w-1/3 mt-7 mx-4">
        <input
          ref="coinInput"
          v-model="coinValue"
          class="input-text-directions w-full h-3/6 download-subheader border-bottom" 
          type="text" 
        />
      </div>
    </div>
    <div
      class="h-1/2 coin-block w-full flex justify-between coin-radius-bottom bg-slate-300 relative">
      <div class="mt-12 mx-4 cursor-pointer" @mouseenter="openFiatList()" @mouseleave="openFiatList()">
        <p class="download-subheader coin flex align-center">{{ fiat }}</p>
        <values-list v-if="openedFiatList" :list="fiatList" :type="'fiat'"></values-list>
      </div>
      <div class="input-block w-1/3 mt-7 mx-4">
        <input
          v-model="fiatValue"
          class="input-text-directions w-full h-3/6 download-subheader border-bottom bg-slate-300" 
          type="text" 
        />
      </div>
    </div>
  </div>
</template>
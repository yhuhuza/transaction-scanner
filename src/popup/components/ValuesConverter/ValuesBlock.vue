<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { ref, onMounted } from 'vue';

import { useConverterStore } from '../../stores/useConverterStore';

const converterStore = useConverterStore();
const { coin, fiat } = storeToRefs(converterStore);
const coinValue = ref(1);
const fiatValue = ref(1);
const coinInput = ref(null);

const focusInput = () => {
  if (coinInput.value) {
    coinInput.value.focus();
  }
};

onMounted(focusInput);
</script>

<template>
  <div>
    <div
      class="h-1/2 coin-block w-full flex justify-between coin-radius-top">
      <div class="mt-12 mx-4 cursor-pointer">
        <p class="download-subheader coin flex align-center">{{ coin }}</p>
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
      class="h-1/2 coin-block w-full flex justify-between coin-radius-bottom bg-slate-300">
      <div class="mt-12 mx-4 cursor-pointer">
        <p class="download-subheader coin flex align-center">{{ fiat }}</p>
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
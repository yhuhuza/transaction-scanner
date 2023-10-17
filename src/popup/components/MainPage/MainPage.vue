<script lang="ts" setup>
import { useDark } from '@vueuse/core';
import { ref, computed } from 'vue';


import DarkPlaceholder from '../../../assets/logo/placeholder-dark.png';
import LightPlaceholder from '../../../assets/logo/placeholder-light.png';
import sendContentMessage from '../../../utils/tools/sendContentMessage';

let timerId: any = 0;
const searchQuery = ref('');
const isDark = useDark({
  selector: "body",
  attribute: "class",
  valueDark: "dark",
  valueLight: "light",
});

const definedPlaceholderImage = computed(() => {
  return isDark.value ? DarkPlaceholder : LightPlaceholder;
});

const handleInput = () => {
  if (timerId) {
    clearTimeout(timerId);
  }

  timerId = setTimeout(() => {
    sendRequestToServer();
  }, 1000);
};

const sendRequestToServer = () => {
  sendContentMessage({ action: 'getInformationAboutTransaction', data: { hash: searchQuery.value } });
};
</script>

<template>
  <div class="mt-8">

    <div class="border dark:border-white border-black rounded-lg w-full flex flex-row py-2.5 px-3.5 h-11 align-center justify-between items-center">
      <input 
        v-model="searchQuery" 
        class="dark:bg-black dark:text-white outline-none input-text h-8 w-full" 
        type="text"
        placeholder="Input your txn hash" 
        @input="handleInput" 
      >
      <div class="ml-2">
        <img class="cursor-pointer dark:invert" src="../../../assets/logo/search-sign.svg" alr="search" />
      </div>
    </div>

    <div class="w-full h-80 mt-9 flex items-center">
      <img class="w-full h-56" :src="definedPlaceholderImage" alt="placeholder" />
    </div>

    <button class="uppercase button-history mt-4 rounded-lg border-black heading2 w-full h-12 py-2">Transaction history</button>
  </div>
</template>

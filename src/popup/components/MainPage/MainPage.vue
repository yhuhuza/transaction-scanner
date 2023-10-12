<script lang="ts" setup>
import { useDark } from '@vueuse/core';
import { computed } from 'vue';

import LightSearchSign from '../../../assets/logo/light-search-sign.svg';
import DarkPlaceholder from '../../../assets/logo/placeholder-dark.png';
import LightPlaceholder from '../../../assets/logo/placeholder-light.png';
import DarkSearchSign from '../../../assets/logo/search-sign.svg';


const isDark = useDark({
  selector: "body",
  attribute: "class",
  valueDark: "dark",
  valueLight: "light",
});

const definedSearch = computed(() => {
  return isDark.value ? LightSearchSign : DarkSearchSign;
});

const definedPlaceholderImage = computed(() => {
  return isDark.value ? DarkPlaceholder : LightPlaceholder;
});
</script>

<template>
  <div class="mt-8">

    <div class="border dark:border-white border-black rounded-lg w-full flex flex-row py-2.5 px-3.5 h-11 align-center justify-between items-center">
      <input class="dark:bg-black dark:text-white outline-none input-text h-8 w-full" type="text" placeholder="Input your txn hash">
      <div class="ml-2">
        <img class="cursor-pointer" :src="definedSearch" alr="search" />
      </div>
    </div>

    <div class="w-full h-80 mt-9 flex items-center">
      <img class="w-full h-56" :src="definedPlaceholderImage" alt="placeholder" />
    </div>

    <button class="uppercase button-history mt-4 rounded-lg border-black heading2 w-full h-12 py-2">Transaction history</button>
  </div>
</template>

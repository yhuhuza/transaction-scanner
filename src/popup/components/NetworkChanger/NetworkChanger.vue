<script lang="ts" setup>
import { useToggle} from '@vueuse/core';
import { ref } from 'vue';

import NetworkList from './NetworkList.vue';

const listOpened = ref(false);
const openListOfNetworks = useToggle(listOpened);
</script>


<template>
    <div 
      class="border w-48 h-10 flex rounded-md bg-marine items-center justify-between px-1.5 py-2 cursor-pointer"
      @click="openListOfNetworks()"
    >
      <network-list v-if="listOpened"></network-list>
      <div>
        <img src="../../../assets/logo/arrow-list.svg" alt="arrow"/>
      </div>
    </div>
</template>
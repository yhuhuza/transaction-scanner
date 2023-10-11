<script lang="ts" setup>
import { useToggle} from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

import { useNetworkStore } from '../../stores/useNetworkStore';

import NetworkList from './NetworkList.vue';

const networkStore = useNetworkStore();
const { network } = storeToRefs(networkStore);

const listOpened = ref(false);
const openListOfNetworks = useToggle(listOpened);
</script>


<template>
    <div 
      class="w-48 h-10 flex rounded-md bg-marine items-center justify-between px-1.5 cursor-pointer relative box-border"
      @click="openListOfNetworks()"
    >
      <span class="heading1">{{ network }}</span>
      <network-list v-if="listOpened" class=""></network-list>
      <div>
        <img src="../../../assets/logo/arrow-list.svg" alt="arrow"/>
      </div>
    </div>
</template>
<script setup lang="ts">
import { NETWORK_ELEMENTS } from '../../../utils/constants';
import { useNetworkStore } from '../../stores/useNetworkStore';

const networkStore = useNetworkStore();

const setNetwork = (network: string) => {
    networkStore.setNetwork(network);
};
</script>

<template>
  <div
    class="
      dark:bg-dark-coal flex flex-col border 
      border-slate-400 bg-white rounded-md absolute 
      top-oof w-48 left-0 box-border overflow-hidden z-10"
    >
    <ul>
        <li
          v-for="item in NETWORK_ELEMENTS" :key="item.id" 
          class="dark:text-white text py-sev pl-fth hover:bg-marine" 
          @click="setNetwork(item.title)"
        >
          {{ item.title }}
        </li>
    </ul>
  </div>
</template>
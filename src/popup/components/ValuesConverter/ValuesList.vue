<script lang="ts" setup>
const props = defineProps(['list', 'type']);
const coinList = props.list;
const valueType = props.type;

import { useConverterStore } from '../../stores/useConverterStore';

const converterStore = useConverterStore();

const setName = (value: string) => {
    converterStore.setName(value, valueType);
};
</script>

<template>
  <ul
class="
    dark:bg-dark-coal flex flex-col border 
      border-slate-400 bg-white rounded-md absolute 
      top-20 w-40 left-0 box-border overflow-hidden z-10"
    >
    <li 
        v-for="value in coinList" 
        :key="value" 
        class="dark:text-white text py-sev pl-fth hover:bg-marine"
        @click="setName(value)"
    >
        {{ value }}
    </li>
  </ul>
</template>
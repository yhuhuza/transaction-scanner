<script lang="ts" setup>
import { useToggle} from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { ref, computed, onMounted } from 'vue';

import { useConverterStore } from '../../stores/useConverterStore';

import ValuesList from './ValuesList.vue';

const props = defineProps(['type', 'numbervalue', 'list']);
const converterStore = useConverterStore();
const { coinName, fiatName, coinValue, fiatValue  } = storeToRefs(converterStore);

const coinInput = ref(null);
const openedList = ref(false);

const focusInput = () => {
  if (coinInput.value && props.type === 'coin') {
    coinInput.value.focus();
  }
};
onMounted(focusInput);

const openList = useToggle(openedList);
const defindedName = computed(() => {
    return props.type === 'coin' ? coinName.value : fiatName.value;
});

const definedValue = computed(() => {
    return props.type === 'coin' ? coinValue.value : fiatValue.value;
});
</script>

<template>
  <div class="w-full h-1/2 flex items-center justify-around relative converter-block">
    <div class="w-1/2 flex items-center ml-3" @mouseenter="openList()" @mouseleave="openList()" >
      <p class="download-subheader">{{ defindedName }}</p>
      <div class="h-5 w-5 ml-1.5 arrow-down">
          <img src="../../../assets/logo/arrow-forward.svg" alt="arrow-down" />
      </div>
      <values-list v-if="openedList" :list="props.list" :type="props.type"></values-list>
    </div>
    <div class="w-1/3 mx-4">
      <input
        ref="coinInput"
        v-model="definedValue"
        class="input-text-directions w-full download-subheader border-bottom" 
        type="text" 
      />
    </div>
  </div>
</template>
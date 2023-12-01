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
  if (coinInput.value) {
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
  <div class="w-full h-1/2 border flex align-center justify-around">
    <div class="flex align-center" @mouseenter="openList()" @mouseleave="openList()">
      <p class="download-subheader">{{ defindedName }}</p>
      <div class="h-5 w-5">
          <img src="../../../assets/logo/arrow-forward.svg" alt="arrow-down" />
      </div>
      <values-list v-if="openedList" :list="props.list" :type="props.type"></values-list>
    </div>
    <div class="input-block w-1/3 mx-4">
      <input
        ref="coinInput"
        v-model="definedValue"
        class="input-text-directions w-full download-subheader border-bottom" 
        type="text" 
      />
    </div>
  </div>
</template>
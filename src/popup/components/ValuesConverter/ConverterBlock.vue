<script lang="ts" setup>
import { useToggle} from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { ref, onMounted } from 'vue';

import { CONVERTER_KEY } from '../../../background/constants/constants';
import { useConverterStore } from '../../stores/useConverterStore';

import ValuesList from './ValuesList.vue';

const props = defineProps(['type', 'numbervalue', 'list']);
const converterStore = useConverterStore();
const { coinName, fiatName, coinValue, fiatValue  } = storeToRefs(converterStore);

let timerId: any = 0;
const coinInput = ref(null);
const openedList = ref(false);
let definedValue = props.type === 'coin' ? coinValue : fiatValue;
const defindedName = props.type === 'coin' ? coinName.value : fiatName.value;

const focusInput = () => {
  if (coinInput.value && props.type === 'coin') {
    coinInput.value.focus();
  }
};
onMounted(focusInput);

const openList = useToggle(openedList);

const handleInput = () => {
  if (timerId) {
    clearTimeout(timerId);
  }

  timerId = setTimeout(() => {

    fetch(`https://min-api.cryptocompare.com/data/price?api_key=${CONVERTER_KEY}&fsym=${coinName.value}&tsyms=${fiatName.value}`)
      .then((response) => response.json())
      .then((data) => {
        const resolveNumber = Object.values(data)[0];
        if (!coinValue) return null;
        const type = props.type === 'coin' ? 'fiat' : 'coin';
        const endValue = props.type === 'coin' 
          ? resolveNumber * coinValue?.value
          : coinValue?.value / resolveNumber;
        converterStore.setValue(endValue, type);
      });
  }, 1500);
};
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
        @input="handleInput"
      />
    </div>
  </div>
</template>
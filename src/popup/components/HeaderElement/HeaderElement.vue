<script lang="ts" setup>
import { useDark} from '@vueuse/core';
import { computed } from 'vue';

import LightSettings from '../../../assets/logo/light-settings-sign.svg';
import DarkSettings from '../../../assets/logo/settings-sign.svg';
import NetworkChanger from '../NetworkChanger/NetworkChanger.vue';

const isDark = useDark({
  selector: "body",
  attribute: "class",
  valueDark: "dark",
  valueLight: "light",
});

const definedSettingsSign = computed(() => {
  return isDark.value
    ? LightSettings  
    : DarkSettings;
});
</script>

<template>
    <header class="dark:bg-dark-coal flex flex-row justify-between items-center box-border items-center">
      <div>
        <img src="../../../assets/logo/Logotype.svg" />
      </div>
      <network-changer></network-changer>
      <router-link to="/settings" class="h-7 w-7 cursor-pointer">
        <img class="h-full" :src="definedSettingsSign" />
      </router-link>
    </header>
</template>
<script lang="ts" setup>
import { useDark } from '@vueuse/core';

import sendContentMessage from '../../../utils/tools/sendContentMessage';

const isDark = useDark({
  selector: "body",
  attribute: "class",
  valueDark: "dark",
  valueLight: "light",
});

const changeColorScheme = () => {
  const isDarkTheme = !isDark.value;
  localStorage.setItem('isDark', JSON.stringify(isDarkTheme));
  isDark.value = isDarkTheme;
  sendContentMessage({action: 'showInstallation'});
};
</script>

<template>
    <label class="switch">
    <input type="checkbox" :checked="isDark" @click="changeColorScheme()">
    <span class="slider round"></span>
    </label> 
</template>

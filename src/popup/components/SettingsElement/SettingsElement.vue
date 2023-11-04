<script lang="ts" setup>
import ToggleButton from '../ToggleButton/ToggleButton.vue';

import SettingsMenu from './SettingsMenu.vue';
</script>

<template>
  <section class="dark:bg-dark-coal border-box">
    <div class="flex items-center mb-7">
      <router-link class="w-10 h-10" to="/index.html" >
        <img class="h-full dark:invert" src="../../../assets/logo/arrow-back.svg" alt="arrow"/>
      </router-link>
      <h2 class="dark:text-white w-full pl-ef section-header text-black text-xl uppercase">Settings</h2>
    </div>
    <div class="mb-8 flex items-center justify-center">
      <div class="w-7 h-7 mr-5">
        <img class="h-full dark:invert" src="../../../assets/logo/theme-sun.svg" alt="moon" />
      </div>
      <toggle-button></toggle-button>
      <div class="w-7 h-7 ml-5 ">
        <img class="h-full dark:invert" src="../../../assets/logo/theme-moon.svg" alt="moon" />
      </div>
    </div>
    <settings-menu></settings-menu>
  </section>
</template>

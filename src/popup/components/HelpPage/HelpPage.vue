<script lang="ts" setup>
import { ref } from 'vue';

import HelpStatus from './HelpStatus.vue';
import HelpText from './HelpText.vue';

const showMessageAfterSubmit = ref(false);
const changeHelpVisibility = () => {
  showMessageAfterSubmit.value = true;

  setTimeout(() => {
    showMessageAfterSubmit.value = false;
  }, 4000);
};
</script>

<template>
  <section class="dark:bg-dark-coal border-box">
    <div class="flex items-cente">
      <router-link class="w-10 h-10" to="/settings" >
        <img class="h-full dark:invert" src="../../../assets/logo/arrow-back.svg" alt="arrow"/>
      </router-link>
      <h2 class="dark:text-white w-full pl-ef section-header text-black text-xl uppercase">Support</h2>
    </div>
    <help-text v-if="!showMessageAfterSubmit" @change-help-visibility="changeHelpVisibility()"></help-text>
    <help-status v-else></help-status>
  </section>
</template>

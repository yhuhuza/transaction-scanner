<template>
    <header class="flex flex-row justify-between items-center box-border justify-around">
      <div>
        <img src="../../../assets/logo/Logotype.svg" />
      </div>
      <network-changer></network-changer>
      <router-link to="/settings" class="h-7 w-7 cursor-pointer">
        <img src="../../../assets/logo/settings-sign.svg" />
      </router-link>
    </header>
</template>
  
<script lang="ts" setup>
import NetworkChanger from '../NetworkChanger/NetworkChanger.vue';
</script>
<script lang="ts" setup>
import NetworkChanger from '../NetworkChanger/NetworkChanger.vue';

</script>

<template>
    <header class="dark:bg-dark-coal flex flex-row justify-between items-center box-border items-center">
      <div><img src="../../../assets/logo/Logotype.svg" /></div>
      <network-changer></network-changer>
      <router-link to="/settings" class="h-7 w-7 cursor-pointer">
        <img class="h-full dark:invert " src="../../../assets/logo/settings-sign.svg" />
      </router-link>
    </header>
</template>
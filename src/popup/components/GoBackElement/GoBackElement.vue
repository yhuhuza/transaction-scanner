<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps(['title', 'path']);
</script>

<template>
  <div class="flex items-center mb-7">
    <router-link class="w-10 h-10" :to="props.path" >
      <img class="h-full dark:invert" src="../../../assets/logo/arrow-back.svg" alt="arrow"/>
    </router-link>
  <h2 class="dark:text-white w-full pl-ef section-header text-black text-xl uppercase">{{ props.title }}</h2>
</div>
</template>

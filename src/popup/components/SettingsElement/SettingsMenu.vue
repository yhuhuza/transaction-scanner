<script lang="ts" setup>
import { useRouter } from 'vue-router';

import { SETTINGS_MENU } from '../../../utils/constants';

const router = useRouter();
</script>

<template>
  <section class="mt-12">
    <div 
      v-for="item in SETTINGS_MENU" 
      :key="item.title" 
      class="overflow-hidden border dark:border-white rounded-lg flex 
      items-center mb-6 cursor-pointer w-full h-16 px-3.5"
      @click="router.push(item.path)"
    >
        <div class="w-2/12 h-full mr-2 flex items-center justify-center">
          <img class="w-7 h-7 dark:invert" :src="item.image" :alt="item.alt" />
        </div>
          <p class="flex-start settings-text mr-auto dark:text-white">{{ item.title }}</p>
          <div class="w-2/12 flex items-center justify-center">
            <img class="dark:invert" src="../../../assets/logo/arrow-forward.svg" alt="arrow" />
          </div>
    </div>
  </section>
</template>
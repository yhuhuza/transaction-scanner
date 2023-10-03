<template>
  <div class="transaction-scanner">
    <Transition name="fade" mode="out-in">
      <HeaderElement v-if="showHeader"></HeaderElement>
      <RouterView></RouterView>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import HeaderElement from './components/HeaderElement/HeaderElement.vue';

const showHeader = computed(() => {
  const { path } = useRoute();
  return path === '/' || path === '/index.html';
});

</script>

<style lang="scss" scoped>
.transaction-scanner {
  box-sizing: border-box;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-leave-from {
  transform: translateX(0);
}
.fade-leave-to {
  transform: translateX(-100%);
}

.fade-enter-from {
  transform: translateX(100%);
}
.fade-enter-to {
  transform: translateX(0);
}

</style>
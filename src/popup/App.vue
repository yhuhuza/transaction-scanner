<template>
  <div class="transaction-scanner">
    <Transition name="fade" mode="out-in">
      <section v-if="mainPage">
        <HeaderElement ></HeaderElement>
        <MainPage></MainPage>
      </section>
      <RouterView v-else></RouterView>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import HeaderElement from './components/HeaderElement/HeaderElement.vue';
import MainPage from './components/MainPage/MainPage.vue';

const mainPage = computed(() => {
  const { path } = useRoute();
  return path === '/' || path === '/index.html';
});

</script>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

.transaction-scanner {
  box-sizing: border-box;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
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
<script lang="ts" setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

import HeaderElement from './components/HeaderElement/HeaderElement.vue';
import MainPage from './components/MainPage/MainPage.vue';

const { locale } = useI18n();
const router = useRoute();

const mainPage = computed(() => {
  return router.path === '/' || router.path === '/index.html';
});


(function setLanguage(): false | void {
  const language = localStorage.getItem("locale");
  if (!language) return false;
  locale.value = language;
})();
</script>

<template>
  <div class="transaction-scanner">
    <Transition :name="router.meta.transition" mode="out-in">
      <section v-if="mainPage">
        <HeaderElement ></HeaderElement>
        <MainPage></MainPage>
      </section>
      <RouterView v-else></RouterView>
    </Transition>
  </div>
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

.transaction-scanner {
  box-sizing: border-box;
}

.fade-enter-active,
.fade-leave-active,
.hide-enter-active,
.hide-leave-active {
  transition: all 0.3s ease;
}

.fade-leave-from {
  transform: translateX(0);
}
.fade-leave-to {
  transform: translateX(100%);
}

.fade-enter-from {
  transform: translateX(-100%);
}
.fade-enter-to {
  transform: translateX(0);
}

.hide-leave-from {
  transform: translateX(0);
}
.hide-leave-to {
  transform: translateX(-100%);
}

.hide-enter-from {
  transform: translateX(100%);
}
.hide-enter-to {
  transform: translateX(0);
}
</style>
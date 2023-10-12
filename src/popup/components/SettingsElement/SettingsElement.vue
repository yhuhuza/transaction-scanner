<script lang="ts" setup>
import { useDark } from '@vueuse/core';
import { computed } from 'vue';

import LightArrowBack from '../../../assets/logo/arrow-back-light.svg';
import DarkArrowBack from '../../../assets/logo/arrow-back.svg';

import SettingsMenu from './SettingsMenu.vue';

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
};

const definedArrow = computed(() => {
  return isDark.value ? LightArrowBack : DarkArrowBack;
});

</script>

<template>
  <section class="dark:bg-dark-coal border-box">

    <div class="flex items-center mb-7">
      <router-link to="/index.html" class="w-10 h-10">
        <img class="h-full" :src="definedArrow" alt="arrow"/>
      </router-link>
      <h2 class="dark:text-white w-full pl-ef heading1 text-black text-xl uppercase">Settings</h2>
    </div>

    <div class="settings-element__background-color">
      <div class="settings-element__logo">
        <img src="../../../assets/logo/light-theme.svg" alt="moon" />
      </div>

      <label class="switch">
        <input type="checkbox" :checked="isDark" @click="changeColorScheme()">
        <span class="slider round"></span>
      </label> 

      <div class="settings-element__logo">
        <img src="../../../assets/logo/dark-theme.svg" alt="moon" />
      </div>
    </div>

    <settings-menu></settings-menu>
  </section>
</template>
  
<style lang="scss" scoped>
.settings-element {
  box-sizing: border-box;
  height: inherit;
  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    &_text {
      font-family: Monserrat Regular, sans-serif;
      font-size: 24px;
    }
  }
  &__arrow-back {
    margin-right: 25%;
  }
  &__background-color {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }
  &__logo {
    margin: 0 20px;
    width: 28px;
    height: 28px;
  }
  &__menu {
    display: flex;
    flex-direction: column;
  }
  &__button {
    cursor: pointer;
    padding: 20px 30px;
    border-radius: 16px;
    border: 1px solid #000;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &_logo {
      width: 24px;
      height: 24px;
    }
  }
}

.switch {
  position: relative;
  display: inline-block;
  width: 68px;
  height: 32px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(32px);
  -ms-transform: translateX(32px);
  transform: translateX(32px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
  </style>
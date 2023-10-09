<template>
  <section class="settings-menu">
    <div v-for="item in SETTINGS_MENU" :key="item.title" class="settings-menu__button">
      <div class="settings-menu__button_logo">
        <img :src="item.image" :alt="item.alt" />
      </div>
      <p class="settings-menu__button_text">{{ item.title }}</p>
      <div class="settings-menu__button_arrow">
        <img src="../../../assets/logo/arrow-forward.svg" alt="arrow" />
      </div>
    </div>
  </section>
</template>
    
<script lang="ts" setup>
import { SETTINGS_MENU } from '../../../utils/constants';

</script>
    
<style lang="scss" scoped>
.settings-menu {
box-sizing: border-box;
height: inherit;
&__header {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    &_text {
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
</style>
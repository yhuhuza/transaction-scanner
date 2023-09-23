<template>
    <header class="header-element">
      <div class="header-element__logo block"></div>
      <button class="header-element__input block">Input</button>
      <div class="header-element__settings block"></div>
      </header>
</template>
  
<script lang="ts" setup></script>
  
<style lang="scss" scoped>

.header-element {
  box-sizing: border-box;
  padding: 15px;
  height: 15vh;
  background-color: gold;
  border-bottom: 2px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .block {
    margin: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
  } 
  &__logo {
    width: 140px;
    border: 2px solid #000000;
    background-color:#000000 !important;
    border-radius: 50%;
    height: 70px;
    background: url('../../../assets/logo/logo-icon.png') center no-repeat;
    background-size: 50px;
  }
  &__input {
    width: 360px;
    height: 40px;
    font-weight: 900;
    border: 2px solid black;
    border-radius: 20px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__settings {
    width: 100px;
    height: 100px;
    background: url('../../../assets/logo/settings-sign.png') center no-repeat;
    background-size: contain;
  }
}

  </style>
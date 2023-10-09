<template>
  <div class="main-page">
    <input class="main-page__input" type="text" placeholder="Input your txn hash">
    <div class="main-page__image">
    </div>
  </div>
  </template>
  
<script lang="ts" setup></script>
  
<style lang="scss" scoped>
.main-page {
  margin-top: 30px;
  &__input {
    display: block;
    border-radius: 8px;
    border: 1px solid #000;
  }
}
</style>
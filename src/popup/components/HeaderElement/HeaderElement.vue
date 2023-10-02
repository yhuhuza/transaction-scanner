<template>
    <header class="header-element">
      <div class="header-element__wrapper">
        <img src="../../../assets/logo/Logotype.svg" />
      </div>
      <select id="select" class="header-element__select" name="plan">
        <option value="none" selected>Tether TRC20</option>
        <option value="free">Bitcoin</option>
        <option value="starter">Ethereum</option>
        <option value="professional">Toncoin</option>
        <option value="corporate">Shiba Inu</option>
      </select>
      <router-link to="/settings/" class="header-element__settings">
        <img src="../../../assets/logo/settings-sign.svg" />
      </router-link>
    </header>
</template>
  
<script lang="ts" setup></script>
  
<style lang="scss" scoped>

.header-element {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  &__select {
    box-sizing: border-box;
    position: relative;
    border: none;
    padding: 10px;
    width: 200px;
    height: 40px;
    background-color: #03B7E2;
    border-radius: 16px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 600;
  }
  &__settings {
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
}

ul, ol{
	list-style: none;
	padding: 0;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
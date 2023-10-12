<script lang="ts" setup></script>

<template>
  <div class="mt-8">

    <div class="border border-black rounded-lg w-full flex flex-row py-2.5 px-3.5 h-11 align-center justify-between items-center">
      <input class="outline-none input-text h-8 w-full" type="text" placeholder="Input your txn hash">
      <div class="ml-2">
        <img class="cursor-pointer" src="../../../assets/logo/search-sign.svg" alr="search" />
      </div>
    </div>

    <div class="w-full h-80 mt-9 flex items-center">
      <img class="w-full h-56" src="../../../assets/logo/placeholder-light.png" alt="placeholder" />
    </div>

    <button class="uppercase button-history mt-4 rounded-lg border-black heading2 w-full h-12 py-2">Transaction history</button>
  </div>
</template>

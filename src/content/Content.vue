<script lang="ts" setup>

</script>

<template>
  <div class="download-transaction border w-screen h-screen dark:text-white dark:bg-dark-coal pt-10 pl-20">
    <div class="flex items-center mb-6">
      <div class="w-16 h-16 mr-max-gap ml-table-gap">
        <img src="../assets/logo/logo-icon.png" alt="logo" />
      </div>
      <div class="download-page-header">
        Transaction Details
      </div>
    </div>
    <table class="dark-regular-text main-table">
      <tr class="mb-table-gap main-table">
        <td class="w-teh download-subheader">Hash</td>
        <td class="download-main-text">2949dbdf85401042d66b11c70d0897a1b592b17b882278d74a4ac12da9bdb1eb</td>
      </tr>
      <tr class="mb-table-gap main-table">
        <td class="w-teh download-subheader">Time</td>
        <td class="download-main-text">2023-09-21 08:38:15 (Local)</td>
      </tr>
      <tr class="mb-table-gap main-table">
        <td class="w-teh download-subheader">From</td>
        <td class="download-main-text">TU4vEruvZwLLkSfV9bNw12EJTPvNr7Pvaa</td>
      </tr>
      <tr class="mb-table-gap main-table">
        <td class="w-teh download-subheader">To</td>
        <td class="download-main-text">TU4vEruvZwLLkSfV9bNw12EJTPvNr7Pvaa</td>
      </tr>
      <tr class="mb-table-gap main-table">
        <td class="w-teh download-subheader">Transferred</td>
        <td class="download-main-text">2,700 USDT</td>
      </tr>
      <tr class="mb-table-gap main-table">
        <td class="w-teh download-subheader">Result</td>
        <td class="download-main-text">Successful</td>
      </tr>
      <tr class="mb-table-gap main-table">
        <td class="w-teh download-subheader">Status</td>
        <td class="download-main-text">Confirmed</td>
      </tr>
      <tr class="mb-table-gap main-table">
        <td class="w-teh download-subheader">Block</td>
        <td class="download-main-text">54881309</td>
      </tr>
      <tr class="mb-table-gap main-table">
        <td class="w-teh download-subheader">Resources Consumed & Fee</td>
        <td class="download-main-text">0.345 TRX  345 Bandwidth  31,895 Energy</td>
      </tr>
    </table>
    <div class="flex item-center justify-center mt-16">
      <button class="uppercase rounded-lg download-button-text button-history py-5 px-24">Download pdf</button>
    </div>
  </div>
</template>


<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
  

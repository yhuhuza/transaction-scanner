<script lang="ts" setup>
const decodedParams = decodeURIComponent(window.location.search);
const transactionDetails = JSON.parse(decodedParams.replace('?', ''));
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
        <td class="download-main-text hashValue">{{ transactionDetails.hashValue }}</td>
      </tr>
      <tr class="mb-table-gap main-table">
        <td class="w-teh download-subheader">Time</td>
        <td class="download-main-text">{{ transactionDetails.timeRange }}</td>
      </tr>
      <tr class="mb-table-gap main-table">
        <td class="w-teh download-subheader">From</td>
        <td class="download-main-text">{{ transactionDetails.accountFrom }}</td>
      </tr>
      <tr class="mb-table-gap main-table">
        <td class="w-teh download-subheader">To</td>
        <td class="download-main-text">{{ transactionDetails.accountTo }}</td>
      </tr>
      <tr class="mb-table-gap main-table">
        <td class="w-teh download-subheader">Transferred</td>
        <td class="download-main-text">{{ transactionDetails.transferredValue }} {{ transactionDetails.transactionSymbol }}</td>
      </tr>
      <tr class="mb-table-gap main-table">
        <td class="w-teh download-subheader">Result</td>
        <td class="download-main-text">{{ transactionDetails.resultValue }}</td>
      </tr>
      <tr class="mb-table-gap main-table">
        <td class="w-teh download-subheader">Status</td>
        <td class="download-main-text">{{ transactionDetails.confirmedStatus }}</td>
      </tr>
      <tr class="mb-table-gap main-table">
        <td class="w-teh download-subheader">Block</td>
        <td class="download-main-text">{{ transactionDetails.blockValue}}</td>
      </tr>
      <tr class="mb-table-gap main-table">
        <td class="w-teh download-subheader">Resources Consumed & Fee</td>
        <td class="download-main-text">0.345 TRX  345 Bandwidth  {{ transactionDetails.costValues.energyTotal }} Energy</td>
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
  

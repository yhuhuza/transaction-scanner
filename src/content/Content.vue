<script lang="ts" setup>
import { jsPDF } from "jspdf";

import GitHub from '../assets/git-hub-qr.svg';
import LinkedInLogo from '../assets/linked-in-qr.svg';
import LogoIcon from '../assets/logo/logo-icon.png';
import TeleframQr from '../assets/telegram-qr.png';

const doc = new jsPDF();

const decodedParams = decodeURIComponent(window.location.search);
const transactionDetails = JSON.parse(decodedParams.replace('?', ''));

doc.setFont('sans-serif', 'normal', 'bold');
doc.addImage(LogoIcon, "PNG", 10, 20, 25, 25);
doc.setFontSize(28);
doc.text("Transaction Details", 65, 35);
doc.setLineWidth(1);
doc.line(10, 55, 200, 55);
doc.setFontSize(14);
doc.setFont('sans-serif', 'normal', 'bold');
doc.text(`Hash: `, 10, 70);
doc.text(`Time: `, 10, 85);
doc.text(`From: `, 10, 100);
doc.text(`To: `, 10, 115);
doc.text(`Transferred: `, 10, 130);
doc.text(`Result: `, 10, 145);
doc.text(`Status: `, 10, 160);
doc.text(`Block: `, 10, 175);
doc.text(`Resources: `, 10, 190);
doc.setFont('sans-serif', 'normal', 'normal');
doc.setTextColor(226, 3, 183);
doc.text(`${transactionDetails.hashValue}`, 45, 70);
doc.setTextColor(0, 0, 0);
doc.text(`${transactionDetails.timeRange}`, 45, 85);
doc.setTextColor(226, 3, 183);
doc.text(`${transactionDetails.accountFrom}`, 45, 100);
doc.setTextColor(0, 0, 0);
doc.text(`${transactionDetails.accountTo}`, 45, 115);
doc.setTextColor(226, 3, 183);
doc.text(`${transactionDetails.transferredValue} ${transactionDetails.transactionSymbol}`, 45, 130);
doc.setTextColor(0, 0, 0);
doc.text(`${transactionDetails.resultValue}`, 45, 145);
doc.text(`${transactionDetails.confirmedStatus}`, 45, 160);
doc.text(`${transactionDetails.blockValue}`, 45, 175);
doc.text(`0.345 TRX  345 Bandwidth  ${transactionDetails.costValues.energyTotal} Energy`, 45, 190);
doc.line(10, 210, 200, 210);
doc.text(`LinkedIn`, 30, 225);
doc.addImage(LinkedInLogo, "PNG", 20, 230, 40, 40);
doc.text(`Github`, 102, 225);
doc.addImage(GitHub, "SVG", 90, 230, 40, 40); 
doc.text(`Telegram`, 160, 225);
doc.addImage(TeleframQr, "PNG", 150, 230, 40, 40);

const downloadTransactionDetaild = () => {
  doc.save(`tr_details_${transactionDetails.hashValue}.pdf`);
};
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
        <td class="download-main-text">{{ transactionDetails.blockValue }}</td>
      </tr>
      <tr class="mb-table-gap main-table">
        <td class="w-teh download-subheader">Resources Consumed & Fee</td>
        <td class="download-main-text">0.345 TRX  345 Bandwidth  {{ transactionDetails.costValues.energyTotal }} Energy</td>
      </tr>
    </table>
    <div class="flex item-center justify-center mt-16">
      <button 
        class="uppercase rounded-lg download-button-text button-history py-5 px-24"
        @click="downloadTransactionDetaild()"
      >
        Download pdf
      </button>
    </div>
  </div>
</template>


<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
  

<script lang="ts" setup>
import { jsPDF } from "jspdf";
import { useI18n } from "vue-i18n";

import LogoIcon from '../assets/logo/logo-icon.png';
import { Y_COORDINATES, TERMS_ON_CHECK, SOCIAL_MEDIA } from '../utils/constants';

const doc = new jsPDF();
const { t, locale } = useI18n();

const decodedParams = decodeURIComponent(window.location.search);
const transactionDetails = JSON.parse(decodedParams.replace('?', ''));

(function setSettings() {
  if (transactionDetails.darkMode) {
    const bodyObject = document.querySelector('body');
    bodyObject.setAttribute("class", "dark");
  }
  if (locale && transactionDetails.locale) {
    locale.value = transactionDetails.locale;
  }
})();

const mainPartCheck = [ 
  `${transactionDetails.hashValue}`,
  `${transactionDetails.timeRange}`,
  `${transactionDetails.accountFrom}`,
  `${transactionDetails.accountTo}`,
  `${transactionDetails.transferredValue} ${transactionDetails.transactionSymbol}`,
  `${transactionDetails.resultValue}`,
  `${transactionDetails.confirmedStatus}`,
  `${transactionDetails.blockValue}`,
  `0.345 TRX  345 Bandwidth  ${transactionDetails.costValues.energyTotal} Energy`,
];

(function() {
  doc.setFont('sans-serif', 'normal', 'bold');
  doc.setFontSize(28);
  doc.addImage(LogoIcon, "PNG", 10, 20, 25, 25);
  doc.text("Transaction Details", 65, 35);
  doc.setLineWidth(1);
  doc.line(10, 55, 200, 55);
})();

(function() {
  doc.setFontSize(14);
  TERMS_ON_CHECK.forEach((item, index) => {
    doc.text(item, 10, Y_COORDINATES[index]);
  });
})();

(function() {
  doc.setFont('sans-serif', 'normal', 'normal');

  mainPartCheck.forEach((item, index) => {
    if ([70, 100, 130].includes(Y_COORDINATES[index])) {
      doc.setTextColor(226, 3, 183);
    } else {
      doc.setTextColor(0, 0, 0);
    }
    doc.text(item, 45, Y_COORDINATES[index]);
  });

  doc.line(10, 210, 200, 210);
})();

(function() {
  SOCIAL_MEDIA.forEach((item) => {
    doc.text(item.text.title, item.text.xcoordinate, 225);
    doc.addImage(item.image.name, item.image.formate, item.image.xcoordinate, 230, 40, 40);
  });
})();


const downloadTransactionDetaild = () => {
  doc.save(`tr_details_${transactionDetails.hashValue}.pdf`);
};
</script>

<template>
  <div class="download-transaction w-screen h-screen dark:text-white dark:bg-dark-coal pt-10 pl-20">
    <div class="flex items-center mb-6">
      <div class="w-16 h-16 mr-max-gap ml-table-gap">
        <img src="../assets/logo/logo-icon.png" alt="logo" />
      </div>
      <div class="download-page-header dark:text-white">{{ t('bill.title') }}</div>
    </div>
    <table class="dark-regular-text main-table">
      <tr 
        v-for="(item, index) in mainPartCheck" 
        :key="index" 
        class="mb-table-gap main-table"
      >
        <td class="w-teh download-subheader dark:text-white">{{ TERMS_ON_CHECK[index] }}</td>
        <td class="download-main-text hashValue dark:text-white">{{ item }}</td>
      </tr>
    </table>
    <div class="flex item-center justify-center mt-16">
      <button 
        class="uppercase rounded-lg download-button-text button-history py-5 px-24"
        @click="downloadTransactionDetaild()"
      >
      {{ t('bill.download') }}
      </button>
    </div>
  </div>
</template>


<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
  

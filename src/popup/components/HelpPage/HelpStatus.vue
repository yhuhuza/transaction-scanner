<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div class="flex flex-col items-center mt-10">
    <div>
      <p class="settings-text dark:text-white">
        {{ t('support.inquiryText') }}
      </p>
      <p class="settings-text mt-4 dark:text-white">
        {{ t('support.reviewMessage') }}
      </p>
      <p class="settings-text mt-4 dark:text-white">
        {{ t('support.questionsMessage') }}
      </p>
      <p class="settings-text mt-4 dark:text-white">
        {{ t('support.goodDayMessage') }}
      </p>
    </div>
    <div class="w-36 h-46 mt-11">
      <img src="../../../assets/logo/heart-sign.svg" alt="heart-sign" />
    </div>
  </div>
</template>

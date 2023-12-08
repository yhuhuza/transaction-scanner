<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

import GoBackElement from '../GoBackElement/GoBackElement.vue';

import HelpStatus from './HelpStatus.vue';
import HelpText from './HelpText.vue';

const { t } = useI18n();
const showMessageAfterSubmit = ref(false);
const changeHelpVisibility = () => {
  showMessageAfterSubmit.value = true;

  setTimeout(() => {
    showMessageAfterSubmit.value = false;
  }, 4000);
};
</script>

<template>
  <section class="dark:bg-dark-coal border-box">
    <go-back-element :title="t('support.title')" path="/settings"></go-back-element>
    <help-text v-if="!showMessageAfterSubmit" @change-help-visibility="changeHelpVisibility()"></help-text>
    <help-status v-else></help-status>
  </section>
</template>

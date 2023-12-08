<script lang="ts" setup>
import { ref, computed, Ref, defineEmits } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const eneteredText: Ref<string> = ref('');

const renderQuantityOfSymbols = computed(() => {
  return eneteredText.value.length; 
});

const emit = defineEmits(['changeHelpVisibility']);
const definedTextColors = computed(() => eneteredText.value.length > 500 ? '!text-red-500' : '');
const definedBorderColors = computed(() => eneteredText.value.length > 500 ? 'border !border-red-500' : '');
const definedDisabledButton = computed(() => 
  eneteredText.value.length === 0 || eneteredText.value.length > 500 
  ? true 
  : false
);
const definedButtonBackground = computed(() => 
  eneteredText.value.length === 0 || eneteredText.value.length > 500 
    ? '!bg-zinc-600' 
    : ''
);

const submitButton = () => {
  emit('changeHelpVisibility');
};
</script>

<template>
  <div class="mt-11 settings-text dark:text-white">
    <p>{{ t('support.writeQuestionTitle') }}</p>
    <p class="mt-4">{{ t('support.assistMessage') }}</p>
    <div class="relative">
      <textarea 
        v-model="eneteredText"
        rows="10" 
        class="w-full border rounded-lg mt-10 py-3 px-6 box-border resize-none !text-black"
        :class="definedBorderColors"
        :placeholder="t('support.placeholderMessage')"
      ></textarea>
      <p class="absolute bottom-2 right-2 mt-2 settings-text" :class="definedTextColors">
        {{ renderQuantityOfSymbols }}/500
      </p>
    </div>
    <div class="mt-8">
      <button
        :disabled="definedDisabledButton"
        class="bg-marine rounded-lg heading2 w-full h-10 px-9 
          py-6 flex items-center justify-center content-center uppercase"
        :class="definedButtonBackground"
        @click="submitButton"
      >
      {{ t('support.sendMessage') }}
      </button>
    </div>
  </div>
</template>

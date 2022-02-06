<script setup lang="ts">
import { ref, computed } from "vue";

import story from "@/data/story";

const currentId = ref(1);

const currentStep = computed(() => {
  return story.find((step) => step.id === currentId.value);
});
</script>

<template>
  <div v-if="currentStep">
    <h1>{{ currentStep.title }}</h1>

    <div v-html="currentStep.text"></div>

    <div>
      <div v-for="(choice, index) in currentStep.choices" :key="index"></div>
    </div>
  </div>
</template>

<style lang="postcss"></style>

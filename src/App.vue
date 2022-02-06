<script setup lang="ts">
import { ref, computed } from "vue";

import story from "@/data/story";
import Choice from "./interfaces/Choice";

const currentId = ref(1);

const currentStep = computed(() => {
  return story.find((step) => step.id === currentId.value);
});

const selectEvent = (choice: Choice) => (currentId.value = choice.goto);
</script>

<template>
  <div class="bg-dark-600 h-screen w-screen text-light-600 font-sans">
    <div class="container mx-auto space-y-8 p-10" v-if="currentStep">
      <h1 class="text-2xl">{{ currentStep.title }}</h1>

      <div v-html="currentStep.text" class="whitespace-pre-line"></div>

      <div class="italic text-true-gray-400">Was tust du?</div>

      <div class="space-y-4">
        <button
          v-for="(choice, index) in currentStep.choices"
          :key="index"
          class="border p-4 border-4 border-light-600 block w-full"
          hover="bg-light-600 text-dark-600"
          @click="selectEvent(choice)"
        >
          {{ choice.text }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="postcss"></style>

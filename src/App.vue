<script setup lang="ts">
import { ref, computed } from "vue";

import story from "@/data/story";
import Choice from "./interfaces/Choice";

const currentId = ref(1);

const currentStep = computed(() => {
  return story.find((step) => step.id === currentId.value);
});

const selectEvent = (choice: Choice) => {
  const gotoIndex = Math.floor(Math.random() * choice.goto.length);

  currentId.value = choice.goto[gotoIndex];
};
</script>

<template>
  <div class="bg-dark-600 h-screen w-screen text-light-600 font-sans">
    <div class="container mx-auto space-y-8 p-10" v-if="currentStep">
      <h1 class="text-2xl">{{ currentStep.title }}</h1>

      <div v-html="currentStep.text" class="whitespace-pre-line"></div>

      <div v-if="currentStep.choices" class="space-y-4">
        <div class="italic text-true-gray-400">
          <div v-if="currentStep.question" v-html="currentStep.question"></div>
          <div v-else>currentStep.question</div>
        </div>

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

      <div v-else class="text-red-700 text-3xl text-center font-bold">
        Du bist gestorben!
      </div>
    </div>
  </div>
</template>

<style lang="postcss"></style>

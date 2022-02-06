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
    <div class="container mx-auto p-10" v-if="currentStep">
      <h1 class="text-2xl">{{ currentStep.title }}</h1>

      <div>
        <div v-if="currentStep.text" class="space-y-8">
          <div v-html="currentStep.text" class="whitespace-pre-line"></div>

          <div v-if="currentStep.choices" class="space-y-8">
            <div class="italic text-true-gray-400">
              <div
                v-if="currentStep.question"
                v-html="currentStep.question"
              ></div>
              <div v-else>Was tust du?</div>
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

          <div
            v-else
            class="text-red-700 text-3xl text-center font-bold space-y-8"
          >
            <div>Du bist gestorben!</div>

            <button
              class="border p-4 border-4 text-light-600 border-light-600 block w-full"
              hover="bg-light-600 text-dark-600"
              @click="currentId = 1"
            >
              Neu starten
            </button>
          </div>
        </div>

        <div v-else>
          So weit, so gut... Bis hierhin hast du es also geschafft. Aber wie
          wird es weiter gehen? Freue dich auf's nächste Kapitel!
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss"></style>

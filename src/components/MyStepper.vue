<template>
  <div class="flex">
    <div v-for="(step, i) in steps" class="text-gray3 mr-8">
      <span :class="{ 'text-secondary': i === activeIndex }"
        >{{ i + 1 }}. {{ step.name }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { Step } from '~/types/customTypes'

defineProps({
  steps: {
    type: Array as PropType<Step[]>,
    required: true,
  },
  activeIndex: {
    type: Number,
    required: true,
  },
})
</script>

<style scoped></style>

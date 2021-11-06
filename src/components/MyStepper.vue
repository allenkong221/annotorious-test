<template>
  <div class="flex items-center">
    <div v-for="(step, i) in steps" class="text-gray3 mr-12 relative text-h4">
      <span
        :class="{
          'font-medium': i === activeIndex,
          'text-black': i <= activeIndex,
        }"
        >{{ i + 1 }}. {{ step.name }}</span
      >
      <div
        :class="{ 'bg-black': i < activeIndex, 'bg-gray3': i >= activeIndex }"
        class="
          step-line
          w-6
          absolute
          top-1/2
          left-full
          transform
          translate-x-3
          -translate-y-1/2
        "
      ></div>
    </div>
    <i-lucide-check-circle class="text-h4 text-gray3" />
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

<style scoped>
.step-line {
  content: '';
  height: 1px;
}
</style>

<template>
  <div
    v-for="(annotation, i) in annotations"
    class="flex absolute bg-blue-400 pointer-events-none"
    :style="{
      top: `${annotation.top * scale}px`,
      left: `${annotation.left * scale}px`,
    }"
  >
    <div class="w-4 h-4 flex items-center justify-center bg-gray4">
      <span class="text-white text-small">{{ i + 1 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAnnotations } from '~/composables/annotations'
const { annotations } = useAnnotations()

defineProps({
  scale: {
    type: Number,
    default: 1,
  },
  imgWidth: {
    type: Number,
    default: 0,
  },
})
</script>

<style scoped></style>

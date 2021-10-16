<template>
  <div
    v-if="!mouseInfo?.isOutside && !pressed && !selectedAnnotationId"
    class="absolute w-1px bg-secondary top-0 pointer-events-none"
    :style="{ left: `${mouseInfo?.elementX || 0}px`, height: `${imgHeight}px` }"
  ></div>
  <div
    v-if="!mouseInfo?.isOutside && !pressed && !selectedAnnotationId"
    class="absolute h-1px bg-secondary left-0 w-full pointer-events-none"
    :style="{ top: `${mouseInfo?.elementY || 0}px` }"
  ></div>
</template>

<script setup lang="ts">
import { UseMouseInElementReturn, useMousePressed } from '@vueuse/core'
import { PropType } from 'vue'
import { useAnnotations } from '~/composables/annotations'
const { selectedAnnotationId } = useAnnotations()
defineProps({
  show: {
    type: Boolean,
    default: true,
  },
  mouseInfo: {
    type: Object as PropType<UseMouseInElementReturn>,
  },
  imgHeight: {
    type: Number,
    default: 0,
  },
})
const { pressed } = useMousePressed()
</script>

<style scoped></style>

<template>
  <div class="absolute top-10 right-10 flex flex-col w-40">
    <div
      v-for="annotation in annotations"
      class="flex flex-col border-1 border-blue-400 rounded mb-5"
      @click="selectAnnotation(annotation.id)"
    >
      <span>Name: {{ annotation.name }}</span>
      <span>Left: {{ annotation.left }}</span>
      <span>Top: {{ annotation.top }}</span>
      <span>Width: {{ annotation.width }}</span>
      <span>Height: {{ annotation.height }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { annotations, useAnnotations } from '~/composables/annotations'

const { selectAnnotation } = useAnnotations()
</script>

<template>
  <div class="absolute top-10 right-10 flex flex-col w-60">
    <div
      v-for="annotation in annotations"
      class="
        flex
        border-1 border-blue-400
        rounded
        mb-5
        p-4
        items-center
        justify-between
      "
      @click="selectAnnotation(annotation.id)"
    >
      <div class="flex flex-col">
        <span>Name: {{ annotation.name }}</span>
        <span>Left: {{ annotation.left }}</span>
        <span>Top: {{ annotation.top }}</span>
        <span>Width: {{ annotation.width }}</span>
        <span>Height: {{ annotation.height }}</span>
      </div>
      <i-mdi-trash
        class="text-blue-600 cursor-pointer"
        @click="deleteAnnotation(annotation.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { annotations, useAnnotations } from '~/composables/annotations'

const { selectAnnotation, deleteAnnotation } = useAnnotations()
</script>

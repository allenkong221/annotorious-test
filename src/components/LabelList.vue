<template>
  <div class="flex flex-col px-4 mt-4">
    <div v-for="(annotation, i) in annotations">
      <span class="font-bold">{{ i + 1 }}. {{ annotation.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAnnotations } from '~/composables/annotations'

const { annotations } = useAnnotations()
</script>

<style scoped></style>

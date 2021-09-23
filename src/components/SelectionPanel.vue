<template>
  <div
    v-for="annotation in annotations"
    class="flex absolute bg-blue-400"
    :style="{
      top: `calc(${annotation.top}px - 1.5rem)`,
      left: `${annotation.left + annotation.width}px`,
    }"
  >
    <div v-show="selectedAnnotationId === annotation.id" class="flex">
      <input
        type="text"
        class="bg-gray-200 border-1 border-gray-600 h-6 focus:outline-none"
        :value="annotation.name"
        @input="updateAnnotationName"
        :data-id="annotation.id"
      />
      <div class="bg-green-700" @click="clearSelection">
        <i-mdi-check class="text-white" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  annotations,
  selectedAnnotationId,
  useAnnotations,
} from '~/composables/annotations'
const { selectAnnotation, clearSelection } = useAnnotations()

const updateAnnotationName = async (event: InputEvent) => {
  const target = event.target as HTMLInputElement
  console.log(target.dataset.id)
  const targetAnnotation = annotations.value.find(
    (annotation) => annotation.id === target.dataset.id
  )
  if (targetAnnotation) targetAnnotation.name = target.value
  selectAnnotation(target.dataset.id || '')
}
</script>

<style scoped></style>

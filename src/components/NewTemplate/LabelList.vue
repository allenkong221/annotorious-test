<template>
  <div class="flex flex-col">
    <div
      v-for="annotation in templateAnnotations[selectedTemplateIndex]"
      class="
        flex
        p-2
        border
        justify-between
        cursor-pointer
        hover:border-gray4
        transition
      "
      :class="{
        ['border-gray2']: selectedAnnotationId !== annotation.id,
        ['border-primary']: selectedAnnotationId === annotation.id,
      }"
      @mouseenter="hoverAnnotation(annotation.id)"
      @mouseleave="unhoverAnnotation(annotation.id)"
      @click="selectAnnotation(annotation.id)"
    >
      <p>{{ annotation.name }}</p>
      <i-mdi-trash
        @click.stop="removeAnnotation(annotation.id)"
        class="text-gray2 transition hover:text-gray4 cursor-pointer"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAnnotations } from '~/composables/annotations'
import { useTemplates } from '~/composables/templates'
const { templateAnnotations, selectedTemplateIndex } = useTemplates()
const { removeAnnotation, selectedAnnotationId, selectAnnotation } =
  useAnnotations()
const hoverAnnotation = (annotationId: string) => {
  document
    .querySelector(`[data-id="${annotationId}"]`)
    ?.classList.add('hovered')
}
const unhoverAnnotation = (annotationId: string) => {
  document
    .querySelector(`[data-id="${annotationId}"]`)
    ?.classList.remove('hovered')
}
</script>

<style scoped></style>

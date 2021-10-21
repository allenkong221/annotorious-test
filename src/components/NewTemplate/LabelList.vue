<template>
  <div class="flex flex-col">
    <div
      v-for="(annotation, i) in templateAnnotations[selectedTemplateIndex]"
      class="
        flex
        p-2
        border-2
        justify-between
        cursor-pointer
        hover:border-secondary
        transition
        mb-3
        rounded-md
      "
      :class="{
        ['border-gray2']: selectedAnnotationId !== annotation.id,
        ['border-secondary']: selectedAnnotationId === annotation.id,
      }"
      @mouseenter="hoverAnnotation(annotation.id)"
      @mouseleave="unhoverAnnotation(annotation.id)"
      @click="selectAnnotation(annotation.id)"
    >
      <p>{{ i + 1 }}. {{ annotation.name }}</p>
      <i-mdi-trash
        v-if="
          selectedAnnotationId === annotation.id ||
          (hoveredAnnotationId && hoveredAnnotationId === annotation.id)
        "
        @click.stop="confirmRemove(annotation.id)"
        class="text-gray3 transition hover:text-gray4 cursor-pointer"
      />
    </div>
    <confirmation-modal
      :model-value="showConfirmRemovalModal"
      @close="showConfirmRemovalModal = false"
    >
      <div class="bg-white w-100 rounded-lg relative flex flex-col p-6">
        <h5 class="text-h3 text-gray4 font-semibold mb-2">
          Are you sure you want to delete this label?
        </h5>
        <p class="text-p text-gray4 mb-2">
          Deleting this label means deleting "{{ annotationToRemove?.name }}"
          values from every single document for this template.
        </p>
        <div class="flex justify-between">
          <my-button
            outlined
            type="secondary"
            class="w-47/100"
            @click="removeAllAnnotationsWithName(annotationToRemove?.name!)"
            >Yes</my-button
          >
          <my-button
            type="secondary"
            class="w-47/100"
            @click="showConfirmRemovalModal = false"
            >No</my-button
          >
        </div>
      </div>
    </confirmation-modal>
  </div>
</template>

<script setup lang="ts">
import { useAnnotations } from '~/composables/annotations'
import { useTemplates } from '~/composables/templates'
import { FormattedAnnotation } from '~/types/customTypes'
const { templateAnnotations, selectedTemplateIndex, templateRawAnnotations } =
  useTemplates()
const { removeAnnotation, selectedAnnotationId, selectAnnotation } =
  useAnnotations()
const hoveredAnnotationId = ref('')
const hoverAnnotation = (annotationId: string) => {
  document
    .querySelector(`[data-id="${annotationId}"]`)
    ?.classList.add('hovered')
  hoveredAnnotationId.value = annotationId
}
const unhoverAnnotation = (annotationId: string) => {
  document
    .querySelector(`[data-id="${annotationId}"]`)
    ?.classList.remove('hovered')
  hoveredAnnotationId.value = ''
}
const annotationToRemove = ref<FormattedAnnotation>()
const showConfirmRemovalModal = ref(false)
const confirmRemove = (annotationId: string) => {
  annotationToRemove.value = templateAnnotations.value[
    selectedTemplateIndex.value
  ].find((annotation) => annotation.id === annotationId)!
  showConfirmRemovalModal.value = true
}
const removeAllAnnotationsWithName = (annotationName: string) => {
  templateAnnotations.value.forEach((allTemplateAnnotations, i) => {
    const indexToDelete = allTemplateAnnotations.findIndex(
      (annotation) => annotation.name === annotationName
    )
    if (i === selectedTemplateIndex.value) {
      removeAnnotation(allTemplateAnnotations[indexToDelete].id)
    } else {
      allTemplateAnnotations.splice(indexToDelete, 1)
      templateRawAnnotations.value[i].splice(indexToDelete, 1)
    }
  })
  showConfirmRemovalModal.value = false
}
</script>

<style scoped></style>

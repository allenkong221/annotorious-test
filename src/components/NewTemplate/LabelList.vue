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
      <p class="mr-2">{{ i + 1 }}.</p>
      <input
        :ref="
          (el) => {
            if (el) inputRefs[i] = el
          }
        "
        :id="`label_${i}`"
        :value="temporaryLabelNames[i]"
        @input="(event) => updateTempLabel(event, i)"
        class="flex-grow focus:outline-none"
        :disabled="!isEditingLabel[i]"
      />
      <div class="flex">
        <i-mdi-pencil
          v-if="!isEditingLabel[i]"
          @click.stop="startEditing(i)"
          class="text-gray3 transition hover:text-gray4 cursor-pointer"
        />
        <i-bx-bxs-save
          v-else-if="
            isEditingLabel[i] && temporaryLabelNames[i] !== annotation.name
          "
          @click="labelChange(i)"
          class="text-gray3 transition hover:text-gray4 cursor-pointer"
        />
        <i-mdi-trash
          v-if="
            selectedAnnotationId === annotation.id ||
            (hoveredAnnotationId && hoveredAnnotationId === annotation.id)
          "
          @click.stop="confirmRemove(annotation.id)"
          class="text-gray3 transition hover:text-gray4 cursor-pointer"
        />
      </div>
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
    <confirmation-modal
      :model-value="showConfirmSaveModal"
      @close="showConfirmSaveModal = false"
    >
      <div class="bg-white w-100 rounded-lg relative flex flex-col p-6">
        <h5 class="text-h3 text-gray4 font-semibold mb-2">
          Are you sure you want to edit this label?
        </h5>
        <p class="text-p text-gray4 mb-2">
          Editing this label means changing the labels "{{
            annotations[indexToBeSaved]?.name
          }}" into "{{ temporaryLabelNames[indexToBeSaved] }}"" from every
          single document for this template.
        </p>
        <div class="flex justify-between">
          <my-button
            outlined
            type="secondary"
            class="w-47/100"
            @click="confirmLabelChange(indexToBeSaved)"
            >Yes</my-button
          >
          <my-button
            type="secondary"
            class="w-47/100"
            @click="showConfirmSaveModal = false"
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
const {
  templateAnnotations,
  selectedTemplateIndex,
  templateRawAnnotations,
  newTemplateStep,
} = useTemplates()
const {
  removeAnnotation,
  selectedAnnotationId,
  selectAnnotation,
  annotations,
} = useAnnotations()
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
const temporaryLabelNames = ref<string[]>([])
const isEditingLabel = ref<boolean[]>([])
watch(newTemplateStep, () => {
  temporaryLabelNames.value = templateAnnotations.value[
    selectedTemplateIndex.value
  ].map((annotation) => annotation.name)
  isEditingLabel.value = []
  for (let i = 0; i < templateAnnotations.value.length; i++) {
    isEditingLabel.value.push(false)
  }
})
watch(selectedTemplateIndex, (index) => {
  temporaryLabelNames.value = templateAnnotations.value[index].map(
    (annotation) => annotation.name
  )
  isEditingLabel.value = []
  for (let i = 0; i < templateAnnotations.value.length; i++) {
    isEditingLabel.value.push(false)
  }
})
watch(
  annotations,
  () => {
    temporaryLabelNames.value = templateAnnotations.value[
      selectedTemplateIndex.value
    ].map((annotation) => annotation.name)
  },
  { deep: true }
)
const showConfirmSaveModal = ref(false)
const indexToBeSaved = ref(0)
const updateTempLabel = (event: Event, index: number) => {
  const target = event.target as HTMLInputElement
  for (let i = 0; i < templateAnnotations.value.length; i++) {
    temporaryLabelNames.value[index] = target.value
  }
}
const labelChange = (index: number) => {
  showConfirmSaveModal.value = true
  indexToBeSaved.value = index
}
const confirmLabelChange = (index: number) => {
  for (let i = 0; i < templateAnnotations.value.length; i++) {
    templateAnnotations.value[i][index].name = temporaryLabelNames.value[index]
  }
  annotations.value[index].name = temporaryLabelNames.value[index]
  indexToBeSaved.value = 0
  showConfirmSaveModal.value = false
}
const inputRefs = ref<any>([])
onBeforeUpdate(() => {
  inputRefs.value = []
})
const startEditing = async (index: number) => {
  await nextTick()

  inputRefs.value[index].focus()
  isEditingLabel.value[index] = true
}
</script>

<style scoped></style>

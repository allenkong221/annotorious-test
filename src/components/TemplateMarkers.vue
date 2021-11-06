<template>
  <div
    v-for="annotation in annotations"
    class="flex absolute bg-blue-400"
    :style="{
      top: `calc(${(annotation.top + annotation.height) * scale}px + 0.25rem)`,
      left: `${getAnnotationLeft(annotation)}px`,
    }"
  >
    <div
      v-show="
        selectedAnnotationId === annotation.id &&
        !isUserEditing &&
        annotation.new
      "
      class="flex flex-col bg-white border-secondary border-2 p-6 rounded-md"
      v-click-away="() => closeAnnotations(annotation.id)"
    >
      <label :for="annotation.id" class="text-p mb-2 z-5"
        >What would you like to call this value?</label
      >
      <input
        :name="annotation.id"
        type="text"
        class="
          border-1 border-gray-500
          py-1
          text-gray-500
          focus:outline-none
          mb-4
          px-2
        "
        :value="currentLabel"
        @input="customLabelInput"
      />
      <my-button
        @click="saveAnnotation"
        type="secondary"
        :disabled="!currentLabel"
      >
        {{ annotation.new ? 'Add label' : 'Save' }}
      </my-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAnnotations } from '~/composables/annotations'
import { useTemplates } from '~/composables/templates'
import { FormattedAnnotation } from '~/types/customTypes'
import { directive as vClickAway } from 'vue3-click-away'
const {
  annotations,
  selectedAnnotationId,
  removeAnnotation,
  cancelSelection,
  isUserEditing,
  saveCurrentAnnotation,
} = useAnnotations()

const { templateAnnotations, selectedTemplateIndex, newTemplateStep } =
  useTemplates()
const props = defineProps({
  scale: {
    type: Number,
    default: 1,
  },
  imgWidth: {
    type: Number,
    default: 0,
  },
})

const closeAnnotations = (annotationId: string) => {
  // console.log('closing')
  // if (selectedAnnotationId.value === annotationId) {
  //   selectedAnnotationId.value = ''
  //   cancelSelection()
  // }
}

const getAnnotationLeft = (annotation: FormattedAnnotation) => {
  if (
    (annotation.left + annotation.width) * props.scale + 276 <
    props.imgWidth
  ) {
    return (annotation.left + annotation.width) * props.scale
  } else {
    return annotation.left * props.scale - 276
  }
}

const customLabelInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  currentLabel.value = target.value.replaceAll(' ', '_')
}

const saveAnnotation = async () => {
  const targetAnnotation = annotations.value.find(
    (annotation) => annotation.id === selectedAnnotationId.value
  )
  const targetAnnotationIndex = annotations.value.findIndex(
    (annotation) => annotation.id === selectedAnnotationId.value
  )
  if (targetAnnotation) {
    saveCurrentAnnotation()

    targetAnnotation.new = false
    selectedAnnotationId.value = ''
    cancelSelection()
    templateAnnotations.value[selectedTemplateIndex.value] = annotations.value
    if (newTemplateStep.value === 1) {
      targetAnnotation.name = currentLabel.value
    } else {
      for (let i = 0; i < templateAnnotations.value.length; i++) {
        templateAnnotations.value[i][targetAnnotationIndex].name =
          currentLabel.value
      }
    }
  }
}

const currentLabel = ref('')
watch(
  () => selectedAnnotationId.value,
  (val, oldVal) => {
    if (val) {
      const targetAnnotation = annotations.value.find(
        (annotation) => annotation.id === val
      )
      if (targetAnnotation) currentLabel.value = targetAnnotation.name
    } else {
      if (oldVal) {
        const oldAnnotation = annotations.value.find(
          (annotation) => annotation.id === oldVal
        )
        if (oldAnnotation && oldAnnotation.new) {
          removeAnnotation(oldAnnotation.id)
        }
      }
    }
  },
  { immediate: true }
)
</script>

<style scoped></style>

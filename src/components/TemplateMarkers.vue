<template>
  <div
    v-for="annotation in annotations"
    class="flex absolute bg-blue-400"
    :style="{
      top: `calc(${(annotation.top + annotation.height) * scale}px + 0.25rem)`,
      left: `${(annotation.left + annotation.width) * scale}px`,
    }"
  >
    <div
      v-show="selectedAnnotationId === annotation.id"
      class="flex flex-col bg-white border-gray-500 border-1 p-6"
    >
      <label :for="annotation.id" class="text-p mb-1"
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
        v-model="currentLabel"
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
const { annotations, selectedAnnotationId, removeAnnotation, cancelSelection } =
  useAnnotations()

defineProps({
  scale: {
    type: Number,
    default: 1,
  },
})

const deleteAnnotation = () => {
  removeAnnotation(selectedAnnotationId.value)
}

const saveAnnotation = async () => {
  const targetAnnotation = annotations.value.find(
    (annotation) => annotation.id === selectedAnnotationId.value
  )
  if (targetAnnotation) {
    targetAnnotation.name = currentLabel.value
    targetAnnotation.new = false
    selectedAnnotationId.value = ''
    cancelSelection()
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

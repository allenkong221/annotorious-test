<template>
  <div class="flex flex-col overflow-y-auto p-4 overflow-x-hidden">
    <div
      v-for="(image, i) in templateImages"
      class="relative w-full border-1 border-secondary my-2"
      @click="changeCurrentTemplate(i)"
    >
      <img :src="image" ref="templateImgRef" class="object-cover w-full" />
      <div
        class="
          absolute
          top-0
          right-0
          text-white
          bg-error
          h-5
          w-5
          rounded-full
          transform
          translate-x-1/2
          -translate-y-1/2
          cursor-pointer
        "
        @click.stop="removeTemplate(i)"
      >
        <i-mdi-close />
      </div>
      <div
        class="
          absolute
          top-0
          left-0
          w-full
          h-full
          hover:bg-gray2
          transition
          hover:bg-opacity-15
          cursor-pointer
        "
      ></div>
      <template-markers :scale="1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAnnotations } from '~/composables/annotations'
import { useTemplates } from '~/composables/templates'
const {
  removeTemplate,
  templateImages,
  selectedTemplateIndex,
  templateAnnotations,
  templateRawAnnotations,
} = useTemplates()
const { annotations, getRawAnnotations, setRawAnnotations } = useAnnotations()
const changeCurrentTemplate = (newIndex: number) => {
  const oldIndex = selectedTemplateIndex.value
  const oldRawAnnotations = getRawAnnotations()
  console.log(oldRawAnnotations)
  templateRawAnnotations.value[oldIndex] = oldRawAnnotations
  templateAnnotations.value[oldIndex] = annotations.value
  annotations.value = templateAnnotations.value[newIndex]
  selectedTemplateIndex.value = newIndex
  console.log(templateRawAnnotations.value)
  setRawAnnotations(templateRawAnnotations.value[newIndex])
}
</script>

<style scoped></style>

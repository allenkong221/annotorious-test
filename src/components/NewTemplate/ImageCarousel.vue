<template>
  <div class="flex flex-col p-4 overflow-x-hidden">
    <div
      v-for="(image, i) in templateImages"
      class="relative w-full border-1 border-secondary my-3 p-1"
      :class="{
        ['border-opacity-40']: i !== 0 && !firstTemplateReady,
        ['!border-primary']: selectedTemplateIndex === i,
      }"
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
        :class="{
          ['bg-gray2 bg-opacity-20']: i !== 0 && !firstTemplateReady,
          'cursor-pointer': i === 0 || firstTemplateReady,
        }"
        class="
          absolute
          top-0
          left-0
          w-full
          h-full
          hover:bg-gray2
          transition
          hover:bg-opacity-15
        "
      ></div>
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
  firstTemplateReady,
} = useTemplates()
const { annotations, getRawAnnotations } = useAnnotations()
const changeCurrentTemplate = (newIndex: number) => {
  if (!firstTemplateReady.value && selectedTemplateIndex.value === 0) {
    return
  }
  const oldIndex = selectedTemplateIndex.value
  const oldRawAnnotations = getRawAnnotations()
  templateRawAnnotations.value[oldIndex] = oldRawAnnotations
  templateAnnotations.value[oldIndex] = annotations.value
  selectedTemplateIndex.value = newIndex
  annotations.value = templateAnnotations.value[newIndex]
}
</script>

<style scoped></style>

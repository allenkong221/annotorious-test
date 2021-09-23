<template>
  <div class="flex flex-col justify-center items-center">
    <h5 class="text-xl text-orange-400">
      Select a file to be used as a template:
    </h5>
    <file-uploader @upload="updateTemplate" />
    <div class="mt-10" v-show="templateImg">
      <h5 class="text-lg text-orange-400 text-center">
        Click and drag over the image to create a new selection
      </h5>
      <div class="relative">
        <img ref="templateImgRef" :src="templateImg" alt="template" />
        <selection-panel />
      </div>
    </div>
    <annotation-panel />
  </div>
</template>

<script setup lang="ts">
import '@recogito/annotorious/dist/annotorious.min.css'
import { useAnnotations } from '~/composables/annotations'
const templateImg = ref()
const templateImgRef = ref()
const { initAnnotations } = useAnnotations()
const updateTemplate = (files: FileList) => {
  templateImg.value = URL.createObjectURL(files[0])
  initAnnotations(templateImgRef.value)
}
</script>

<style scoped></style>

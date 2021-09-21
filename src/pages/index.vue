<template>
  <div class="flex flex-col justify-center items-center">
    <file-uploader @upload="updateTemplate" />
    <div class="mt-10">
      <img ref="templateImgRef" :src="templateImg" alt="template" />
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

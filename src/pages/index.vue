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
    <button
      @click="sendInfoToAPI"
      class="
        text-lg text-red-700
        border-1 border-red-700
        px-6
        py-2
        mt-2
        absolute
        top-10
        left-10
        active:bg-red-100
        focus:border-red-700 focus:border-1 focus:outline-none
      "
    >
      Send to API
    </button>
    <annotation-panel />
  </div>
</template>

<script setup lang="ts">
import '@recogito/annotorious/dist/annotorious.min.css'
import { annotations, useAnnotations } from '~/composables/annotations'
import axios from 'axios'

const templateImg = ref()
const templateImgRef = ref()
const templateFile = ref()
const { initAnnotations } = useAnnotations()
const updateTemplate = (files: FileList) => {
  templateFile.value = files[0]
  templateImg.value = URL.createObjectURL(files[0])
  initAnnotations(templateImgRef.value)
}
const sendInfoToAPI = async () => {
  const formData = new FormData()
  formData.append('file', templateFile.value)
  formData.append('annotations', JSON.stringify(annotations.value))
  try {
    await axios.post('/test', formData, {
      headers: {
        'Content-Type': 'multipart/form-data;',
      },
    })
  } catch {
  } finally {
    alert('sent to the API')
  }
}
</script>

<style scoped></style>

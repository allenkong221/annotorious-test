<template>
  <div class="flex">
    <div class="mr-20 flex flex-col items-center">
      <file-uploader
        button-text="upload files"
        multiple
        @upload="handleMultipleUpload"
      />
      <p class="text-p">Number of uploaded files: {{ files?.length || 0 }}</p>
    </div>
    <div class="flex flex-col flex-grow">
      <h5 class="text-h3">Annotations to send</h5>
      <textarea
        v-model="annotationsToSend"
        rows="20"
        class="border-1 border-secondary focus:outline-none"
      />
      <my-button type="secondary" class="ml-auto mt-2" @click="makeRequest"
        >Send to API</my-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
const annotationsToSend = ref('')
const mockAnnotations = [
  {
    name: 'date',
    id: '#a7079111-6b3d-4146-9067-10349e77bc76',
    left: 179,
    top: 4,
    width: 172,
    height: 21,
  },
  {
    name: 'balance',
    id: '#9363bc87-f7d9-4d77-976a-b0e50912b3c4',
    left: 320,
    top: 67,
    width: 82,
    height: 24,
  },
  {
    name: 'code',
    id: '#fdfe9ac2-0092-452d-a68f-73562112f921',
    left: 189,
    top: 292,
    width: 74,
    height: 33,
  },
]
const files = ref<FileList>()

const makeRequest = async () => {
  if (!files.value) {
    alert('No files selected')
    return
  }
  const formData = new FormData()
  const annotations = []
  for (let i = 0; i < files.value.length; i++) {
    annotations.push(mockAnnotations)
  }
  // @ts-ignore
  for (const file of files.value) {
    formData.append('files', file)
  }
  if (annotationsToSend.value) {
    formData.append(
      'annotations',
      JSON.stringify(annotationsToSend.value.replace(/(\r\n|\n|\r|\s)/gm, ''))
    )
  } else {
    formData.append('annotations', JSON.stringify(annotations))
  }
  try {
    await axios.post('/multitest', formData, {
      headers: {
        'Content-Type': 'multipart/form-data;',
      },
    })
  } catch {
  } finally {
    alert('sent to the API')
  }
}
const handleMultipleUpload = (uploadedFiles: FileList) => {
  files.value = uploadedFiles
}
</script>

<style scoped></style>

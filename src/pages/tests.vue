<template>
  <div>
    <file-uploader
      button-text="upload files"
      multiple
      @upload="handleMultipleUpload"
    />
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'

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
const handleMultipleUpload = async (files: FileList) => {
  const formData = new FormData()
  const annotations = []
  for (let i = 0; i < files.length; i++) {
    annotations.push(mockAnnotations)
  }
  // @ts-ignore
  for (const file of files) {
    formData.append('files', file)
  }
  formData.append('annotations', JSON.stringify(annotations))
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
</script>

<style scoped></style>

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
    left: 1217,
    top: 42,
    width: 188,
    height: 52,
  },
  {
    name: 'balance',
    id: '#9363bc87-f7d9-4d77-976a-b0e50912b3c4',
    left: 1267,
    top: 349,
    width: 111,
    height: 59,
  },
  {
    name: 'code',
    id: '#fdfe9ac2-0092-452d-a68f-73562112f921',
    left: 800,
    top: 1809,
    width: 653,
    height: 59,
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

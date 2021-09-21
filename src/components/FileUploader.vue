<template>
  <input type="file" @change="uploadFiles" :multiple="multiple" />
</template>

<script setup lang="ts">
defineProps({
  multiple: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(['upload'])
const uploadFiles = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files && input.files.length) {
    emits('upload', input.files)
  }
}
</script>

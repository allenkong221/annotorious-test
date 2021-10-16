<template>
  <div>
    <my-button
      ref="buttonRef"
      type="secondary"
      class="text-p px-10"
      outlined
      @click="inputRef.click()"
      >{{ buttonText }}</my-button
    >
    <input
      ref="inputRef"
      type="file"
      accept="image/*"
      @change="uploadFiles"
      :multiple="multiple"
      @click="emits('click')"
      class="hidden"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  multiple: {
    type: Boolean,
    default: false,
  },
  buttonText: {
    type: String,
    required: true,
  },
})
const inputRef = ref()
const emits = defineEmits<{
  (e: 'click'): void
  (e: 'upload', files: FileList): void
}>()
// const emits = defineEmits(['upload', 'click'])
const uploadFiles = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files && input.files.length) {
    emits('upload', input.files)
  }
}
</script>

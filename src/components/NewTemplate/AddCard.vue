<template>
  <div
    class="
      relative
      flex
      w-full
      justify-center
      items-center
      border-1 border-secondary
      p-2
    "
    @click="inputRef.click()"
  >
    <span class="text-h3 font-bold text-secondary">Add +</span>
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
    <input
      ref="inputRef"
      type="file"
      accept="image/*"
      @change="uploadFiles"
      multiple
      class="hidden"
    />
  </div>
</template>

<script setup lang="ts">
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

<style scoped></style>

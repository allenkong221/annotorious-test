<template>
  <input
    @input="updateValue"
    :value="modelValue"
    :placeholder="placeholder"
    class="
      border-1 border-gray-200
      p-2
      focus:outline-none
      text-gray-500
      placeholder-gray-400
    "
  />
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
})
const updateValue = (e: Event) => {
  const target = e.target as HTMLInputElement
  emits('update:modelValue', target.value)
}
const emits = defineEmits(['update:modelValue'])
</script>

<style scoped></style>

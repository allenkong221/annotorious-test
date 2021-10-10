<template>
  <div class="border-primary border-1 pt-3 pl-3 flex flex-col bg-white">
    <label>{{ label }}</label>
    <input
      @input="updateValue"
      :value="modelValue"
      :placeholder="placeholder"
      class="py-3 focus:outline-none placeholder-gray2"
      :type="type"
    />
  </div>
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
  label: {
    type: String,
    default: 'Label',
  },
  type: {
    type: String,
    default: 'text',
  },
})
const updateValue = (e: Event) => {
  const target = e.target as HTMLInputElement
  emits('update:modelValue', target.value)
}
const emits = defineEmits(['update:modelValue'])
</script>

<style scoped></style>

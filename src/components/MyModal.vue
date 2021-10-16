<template>
  <transition name="grow">
    <div
      v-show="modelValue"
      class="
        fixed
        top-0
        left-0
        w-full
        h-full
        bg-gray4 bg-opacity-50
        z-5
        flex
        justify-center
        items-center
      "
    >
      <div ref="modalContent">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(['close', 'update:modelValue'])
const modalContent = ref(null)
onClickOutside(modalContent, () => {
  closeModal()
})
const closeModal = () => {
  if (props.modelValue) {
    emits('update:modelValue', false)
    emits('close')
  }
}
</script>

<style scoped>
.grow-enter-active,
.grow-leave-active {
  transition: transform 0.15s ease-in-out;
}
.grow-enter-from,
.grow-leave-to {
  transform: scale(0);
}
</style>

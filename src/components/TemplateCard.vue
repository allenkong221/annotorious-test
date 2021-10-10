<template>
  <div
    @click="emits('click')"
    class="
      template-card
      border border-secondary
      rounded-lg
      h-64
      w-64
      flex
      justify-center
      items-center
      cursor-pointer
      hover:bg-gray1
      transition
    "
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['click'])
</script>

<style scoped>
.template-card {
  box-shadow: 2px 2px 6px #00000029;
}
</style>

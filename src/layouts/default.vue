<template>
  <div class="w-full min-h-100vh flex">
    <sidebar v-if="route.path !== '/'" />
    <div class="p-8 w-full flex-grow"><router-view /></div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style scoped></style>

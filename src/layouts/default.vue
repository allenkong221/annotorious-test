<template>
  <div class="w-full min-h-100vh grid-container">
    <div class="logo border-b-2 border-r-2 border-secondary bg-gray1"></div>
    <navigation-top class="top" />
    <sidebar v-if="route.path !== '/'" class="side" />
    <div class="p-15 w-full flex-grow content"><router-view /></div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 70px 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    'logo top'
    'side content';
}

.logo {
  grid-area: logo;
}

.top {
  grid-area: top;
}

.side {
  grid-area: side;
}

.content {
  grid-area: content;
}
</style>

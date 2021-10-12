<template>
  <div class="w-full min-h-100vh grid-container flex flex-col justify-between">
    <navigation-top class="top" />
    <div class="p-5 md:p-12 lg:px-15 lg:py-2 w-full flex-grow content">
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route" />
        </transition>
      </router-view>
    </div>
    <sidebar v-if="route.path !== '/'" class="side" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.content {
  overflow-y: auto;
  flex: 1 1 0px;
}
@media (min-width: 768px) {
  .grid-container {
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-template-rows: 50px 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      'side top'
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
    max-height: none;
  }
}
</style>

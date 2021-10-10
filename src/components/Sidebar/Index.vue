<template>
  <div
    class="
      md:border-r-2
      border-secondary
      flex
      justify-around
      md:justify-start md:flex-col
      items-center
      px-4
      py-2
      md:py-0 md:bg-gray1
    "
  >
    <div
      class="
        flex flex-col
        items-center
        p-2
        lg:p-4
        hover:text-secondary
        group
        flex-grow
        md:flex-grow-0
        cursor-pointer
        transition
      "
      :class="{
        'menu-item--active': route.path.includes(item.path),
        'text-secondary': route.path.includes(item.path),
      }"
      v-for="item in menuItems"
      @click="router.push({ path: item.path })"
    >
      <div class="flex transition justify-center items-center p-2 mb-1">
        <component v-bind:is="item.icon" class="text-p"></component>
      </div>
      <span class="text-h5"> {{ item.name }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMenu } from '~/composables/menu'
const { menuItems } = useMenu()
const route = useRoute()
const router = useRouter()
</script>

<style scoped>
@media (max-width: 767.99px) {
  .menu-item--active {
    background-color: #675bf515;
    border-radius: 10px;
  }
}
</style>

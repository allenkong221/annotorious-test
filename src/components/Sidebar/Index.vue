<template>
  <div
    class="
      flex
      justify-around
      md:justify-start md:flex-col
      items-center
      py-2
      relative
      md:py-0 md:bg-gray1
    "
  >
    <div class="h-25 flex items-center">LOGO</div>
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
        group
        w-full
      "
      :class="{
        'menu-item--active': route.path.includes(item.path),
        'text-secondary': route.path.includes(item.path),
        'hover:bg-secondary': !route.path.includes(item.path),
        'hover:text-white': !route.path.includes(item.path),
      }"
      v-for="(item, i) in menuItems"
      @click="router.push({ path: item.path })"
      :ref="
        (el) => {
          if (el) itemsRef[i] = el
        }
      "
    >
      <div class="flex transition justify-center items-center p-2 mb-1">
        <component
          v-bind:is="item.icon"
          :class="{
            'group-hover:text-white': !route.path.includes(item.path),
            'text-black': !route.path.includes(item.path),
          }"
          class="text-h3 transition"
        ></component>
      </div>
      <span
        class="text-h5 font-medium text-black transition"
        :class="{ 'group-hover:text-white': !route.path.includes(item.path) }"
      >
        {{ item.name }}
      </span>
    </div>
    <div
      class="
        absolute
        top-0
        left-0
        border-r-2 border-b-2 border-secondary
        w-full
        rounded-br-md
        pointer-events-none
        transition-all
        duration-250
      "
      :style="{ height: `${selectedTop}px` }"
    ></div>
    <div
      class="
        absolute
        bottom-0
        left-0
        border-r-2 border-t-2 border-secondary
        w-full
        rounded-tr-md
        transition-all
        duration-250
        pointer-events-none
      "
      :style="{ height: `calc(100% - ${selectedBottom}px)` }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { useMenu } from '~/composables/menu'
const { menuItems } = useMenu()
const route = useRoute()
const router = useRouter()
const itemsRef = ref<any[]>([])
onBeforeUpdate(() => {
  itemsRef.value = []
})
const selectedTop = ref(0)
const selectedHeight = ref(0)
const selectedBottom = computed(() => {
  return selectedTop.value + selectedHeight.value
})
onMounted(() => {
  console.log('mounting')
  updateSelectedPositions()
})
watch(
  () => route.path,
  async () => {
    await nextTick()
    updateSelectedPositions()
  }
)
const updateSelectedPositions = () => {
  for (const item of itemsRef.value) {
    if (item.classList.contains('menu-item--active')) {
      selectedTop.value = item.offsetTop
      selectedHeight.value = item.clientHeight
    }
  }
}
</script>

<style scoped>
@media (max-width: 767.99px) {
  .menu-item--active {
    background-color: #675bf515;
    border-radius: 10px;
  }
}
</style>

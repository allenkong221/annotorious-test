<template>
  <div
    class="
      border-2 border-secondary
      flex
      justify-center
      items-center
      flex-col
      relative
      p-4
    "
  >
    <div
      v-if="templateImages.length > 0"
      class="grid grid-cols-3 auto-rows-fr -m-2 w-full h-full gap-4"
    >
      <div
        v-for="(image, i) in templateImages"
        class="relative flex w-full border-1 border-secondary p-2"
      >
        <img :src="image" ref="templateImgRef" class="object-contain w-full" />
        <div
          class="
            absolute
            top-0
            right-0
            text-white
            bg-error
            h-5
            w-5
            rounded-full
            transform
            translate-x-1/2
            -translate-y-1/2
            cursor-pointer
          "
          @click="removeTemplate(i)"
        >
          <i-mdi-close />
        </div>
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
        <template-markers :scale="1" />
      </div>
      <new-template-add-card @upload="addTemplates" />
    </div>
    <div
      v-if="templateImages.length === 0"
      class="flex flex-col w-1/2 items-center"
    >
      <span class="text-2xl text-center text-gray-500 mb-6"
        >Please select 5-10 files to build a template from</span
      >

      <file-uploader
        button-text="Select files"
        @upload="setTemplates"
        multiple
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTemplates } from '~/composables/templates'

const { templateImages, setTemplates, removeTemplate, addTemplates } =
  useTemplates()
</script>

<style scoped></style>

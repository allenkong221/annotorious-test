<template>
  <div
    class="
      border border-secondary border-dashed
      flex flex-col
      relative
      bg-gray1
      p-6
      overflow-y-scroll
    "
  >
    <template v-if="newTemplateStep === 0">
      <div
        v-if="templateImages.length > 0"
        class="grid grid-cols-3 auto-rows-fr -m-2 w-full gap-4"
      >
        <div
          v-for="(image, i) in templateImages"
          class="relative w-full border-1 border-secondary p-2"
        >
          <img :src="image" ref="templateImgRef" class="object-cover w-full" />
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
          <template-markers :scale="currentScale" />
        </div>
        <new-template-add-card @upload="addTemplates" />
      </div>
      <div
        v-if="templateImages.length === 0"
        class="flex flex-col w-1/2 items-center my-auto mx-auto"
      >
        <span class="text-p text-center text-gray4 mb-2"
          >Minimum of 5 files</span
        >
        <h3 class="text-h3 text-gray4 mb-10 text-center font-semibold">
          The more documents you add, the more accurate the template.
        </h3>

        <file-uploader
          button-text="+ Sample Docs"
          @upload="setTemplates"
          multiple
        />
      </div>
    </template>
    <template v-else-if="newTemplateStep === 1">
      <div class="flex h-full">
        <new-template-image-carousel class="w-35" />
        <div class="flex-1 h-full relative">
          <img ref="imgRef" :src="templateImages[selectedTemplateIndex]" />
          <template-markers :scale="currentScale" />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useAnnotations } from '~/composables/annotations'
import { useTemplates } from '~/composables/templates'

const {
  templateImages,
  setTemplates,
  removeTemplate,
  addTemplates,
  newTemplateStep,
  selectedTemplateIndex,
} = useTemplates()

const { initAnnotations } = useAnnotations()
const currentScale = ref(0)
const imgRef = ref<HTMLImageElement>()
watch(newTemplateStep, async (newStep) => {
  if (newStep === 1) {
    await nextTick()
    initializeAnnotations()
  }
})

const initializeAnnotations = () => {
  initAnnotations(imgRef.value!)
  const tempImg = new Image()
  tempImg.src = templateImages.value[selectedTemplateIndex.value]
  tempImg.onload = () => {
    currentScale.value = imgRef.value?.width! / tempImg.width
    console.log(currentScale.value)
  }
}
</script>

<style scoped></style>

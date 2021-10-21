<template>
  <div
    class="
      border border-secondary border-dashed
      flex flex-col
      relative
      bg-gray1
      p-6
      overflow-y-auto
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
        <new-template-image-carousel class="w-30 mr-5" />
        <div class="flex-1 h-full relative" ref="imageWrapper">
          <img ref="imgRef" :src="templateImages[selectedTemplateIndex]" />
          <new-template-mouse-cross
            :mouse-info="mouseInElement!"
            :img-height="realImgHeight"
          />
          <new-template-numbers
            :scale="currentScale"
            :img-width="realImgWidth"
          />
          <template-markers :scale="currentScale" :img-width="realImgWidth" />
        </div>
      </div>
    </template>
    <template v-else-if="newTemplateStep === 2">
      <div class="flex h-full">
        <new-template-image-carousel class="w-30 mr-5" />
        <div class="flex-1 h-full relative" ref="imageWrapper">
          <img ref="imgRef" :src="templateImages[selectedTemplateIndex]" />
          <!-- <new-template-mouse-cross
            :mouse-info="mouseInElement!"
            :img-height="realImgHeight"
          /> -->
          <!-- <template-markers :scale="currentScale" :img-width="realImgWidth" /> -->
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useMouseInElement, UseMouseInElementReturn } from '@vueuse/core'
import { useAnnotations } from '~/composables/annotations'
import { useTemplates } from '~/composables/templates'

const {
  templateImages,
  setTemplates,
  removeTemplate,
  addTemplates,
  newTemplateStep,
  selectedTemplateIndex,
  templateRawAnnotations,
} = useTemplates()

const { initAnnotations, destroyAnnotations, setRawAnnotations } =
  useAnnotations()
const imageWrapper = ref()
const currentScale = ref(0)
const realImgHeight = ref(0)
const realImgWidth = ref(0)
const imgRef = ref<HTMLImageElement>()
watch(newTemplateStep, async (newStep) => {
  if (newStep === 1) {
    await nextTick()
    initializeAnnotations()
  }
})
const mouseInElement = ref<UseMouseInElementReturn>()

// This resets the annotorious instance everytime the user changes the sample image, if the user is on the sample drawing step.
watch(selectedTemplateIndex, async (val) => {
  if (newTemplateStep.value === 1) {
    await nextTick()
    destroyAnnotations()
    initializeAnnotations()
    setRawAnnotations(templateRawAnnotations.value[selectedTemplateIndex.value])
  }
})

const updateScale = () => {
  const tempImg = new Image()
  tempImg.src = templateImages.value[selectedTemplateIndex.value]
  tempImg.onload = () => {
    currentScale.value = imgRef.value?.width! / tempImg.width
    realImgHeight.value = imgRef.value?.height!
    realImgWidth.value = imgRef.value?.offsetWidth!
  }
}
const initializeAnnotations = () => {
  initAnnotations(imgRef.value!)
  mouseInElement.value = useMouseInElement(
    imageWrapper.value.querySelector('div')
  )
  updateScale()
}
</script>

<style scoped></style>

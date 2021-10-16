<template>
  <div class="flex flex-col h-full">
    <div class="flex mb-10">
      <back-button class="mr-16" />
      <my-stepper :steps="steps" :active-index="newTemplateStep" />
    </div>
    <div class="flex h-full">
      <new-template-box class="w-60/100 h-full" />
      <div class="w-40/100 flex flex-col pl-5" v-if="!newTemplateImage">
        <h5 class="text-h2 font-bold mb-4 text-gray4">
          1. Upload Sample Documents
        </h5>
        <p class="text-gray4 text-p mb-4">
          As the first step, upload a minimum of 5 documents with the same
          format. We recommend 10 or more.
        </p>
      </div>
      <div class="w-3/10 flex flex-col pl-5" v-else>
        <h5 class="text-xl mb-4">Upload Sample Document</h5>
        <span class="text-gray-500 text-lg mb-4">
          Alright, you successfully uploaded an image. Now check if you selected
          the correct image and we can move on!
        </span>
        <my-button type="primary" @click="newTemplateStep = 1">
          <div class="flex items-center justify-center">
            <span>Next</span><i-carbon-caret-right />
          </div>
        </my-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTemplates } from '~/composables/templates'

const { steps, newTemplateImage, newTemplateStep } = useTemplates()

// watch(
//   () => newTemplateStep.value,
//   (newStep, oldStep) => {
//     if (newStep === 1 && oldStep === 0) {
//       initAnnotations(templateImgRef.value!)
//       const tempImg = new Image()
//       tempImg.src = newTemplateImage.value
//       tempImg.onload = () => {
//         templateScale.value = templateImgRef.value?.width! / tempImg.width
//       }
//     }
//   }
// )
</script>

<style scoped></style>

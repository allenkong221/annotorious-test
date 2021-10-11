<template>
  <div class="flex flex-col h-full">
    <div class="flex mb-10">
      <back-button class="mr-16" />
      <my-stepper :steps="steps" :active-index="newTemplateStep" />
    </div>
    <div class="flex flex-grow">
      <new-template-box class="w-7/10 h-full" />
      <!-- <template v-if="newTemplateStep === 0"> -->
      <div class="w-3/10 flex flex-col pl-5" v-if="!newTemplateImage">
        <h5 class="text-xl mb-4">Upload Sample Document</h5>
        <span class="text-gray-500 text-lg mb-4">
          To start creating a new template, first upload an image on the left
          box
        </span>
        <my-button type="secondary">
          <div class="flex items-center justify-center">
            <span>Next</span><i-carbon-caret-right />
          </div>
        </my-button>
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
      <!-- </template> -->
      <!-- <template v-else-if="newTemplateStep === 1">
        <div class="flex flex-col w-3/10 px-5">
          <h5 class="text-xl mb-4">Label the document</h5>
          <p class="text-gray-500">
            Please label the document with the required fields so that the model
            knows where to conduct OCR. To create a new label, click and drag
            over the image.
          </p>
          <label-list />
          <my-button type="primary" class="mt-10" @click="submitNewTemplate"
            >Submit Template</my-button
          >
        </div>
      </template> -->
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

<template>
  <my-modal
    :model-value="showNewTemplateModal"
    @close="showNewTemplateModal = false"
  >
    <div class="bg-white w-95vw h-90vh rounded-lg relative flex flex-col p-6">
      <div class="flex mb-5">
        <back-button class="mr-16" />
        <my-stepper :steps="steps" :active-index="newTemplateStep" />
      </div>
      <div class="flex h-9/10 justify-between">
        <new-template-box class="w-65/100" />
        <div class="w-35/100 flex flex-col pl-5" v-if="!newTemplateImage">
          <template v-if="newTemplateStep === 0">
            <h5 class="text-h2 font-bold mb-4 text-gray4">
              1. Upload Sample Documents
            </h5>
            <p class="text-gray4 text-p mb-4">
              As the first step, upload a minimum of 5 documents with the same
              format. We recommend 10 or more.
            </p>
            <my-button type="primary" @click="startLabeling">
              <div class="flex items-center justify-center">
                <span>Next</span><i-carbon-caret-right />
              </div>
            </my-button>
          </template>
          <template v-else-if="newTemplateStep === 1">
            <h5 class="text-h2 font-bold mb-4 text-gray4">
              2. Label the Documents
            </h5>
            <p class="text-gray4 text-p mb-4">
              Create a bounding box around each text area you want to capture
              and give it a label.
            </p>
          </template>
        </div>
      </div>
    </div>
  </my-modal>
</template>

<script setup lang="ts">
import { useTemplates } from '~/composables/templates'

const {
  showNewTemplateModal,
  steps,
  newTemplateImage,
  newTemplateStep,
  templateImages,
  templateAnnotations,
  templateRawAnnotations,
} = useTemplates()

const startLabeling = () => {
  newTemplateStep.value = 1
  const totalTemplates = templateImages.value.length
  templateAnnotations.value = []
  templateRawAnnotations.value = []
  for (let i = 0; i < totalTemplates; i++) {
    templateAnnotations.value.push([])
    templateRawAnnotations.value.push([])
  }
}
</script>

<style scoped></style>

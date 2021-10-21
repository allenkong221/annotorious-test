<template>
  <my-modal
    :model-value="showNewTemplateModal"
    @close="showNewTemplateModal = false"
  >
    <div class="bg-white w-95vw h-90vh rounded-lg relative flex flex-col p-12">
      <div class="flex mb-5">
        <back-button class="mr-16" />
        <my-stepper :steps="steps" :active-index="newTemplateStep" />
      </div>
      <div class="flex h-9/10 justify-between">
        <new-template-box class="w-62/100" />
        <div class="w-38/100 flex flex-col pl-12" v-if="!newTemplateImage">
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
            <p
              class="text-gray4 text-p mb-4"
              v-if="selectedTemplateIndex === 0"
            >
              Create a bounding box around each text area you want to capture
              and give it a label. Once you've finished labeling, click 'Next'.
            </p>
            <p
              class="text-gray4 text-p mb-4"
              v-else-if="selectedTemplateIndex !== 0"
            >
              {{
                selectedTemplateIndex === templateImages.length - 1
                  ? `Congrats! Now we're off to the verification step!`
                  : `Great job! You've labelled your first document. For the remaining
              documents, adjust each bounding box to ensure the texts are
              covered.`
              }}
            </p>
            <new-template-label-list />
            <div class="mt-auto flex flex-col">
              <p class="text-p text-gray4 mb-2">
                Once you have finished labeling this document, click Next.
              </p>
              <my-button outlined @click="handleAdvanceTemplate">{{
                selectedTemplateIndex === templateImages.length - 1
                  ? 'Submit'
                  : 'Next'
              }}</my-button>
            </div>
          </template>
          <template v-else-if="newTemplateStep === 2">
            <h5 class="text-h2 font-bold mb-4 text-gray4">
              3. Verify Retrieved Values
            </h5>
            <p class="text-gray4 text-p mb-2">
              For each label, please verify if the values are correct. This will
              improve the accuracy of the model and save you more time in the
              future.
            </p>
            <p class="text-gray4 text-p mb-4">
              There are {{ mockLabelCount }} labels x
              {{ mockDocumentCount }} documents =
              {{ mockLabelCount * mockDocumentCount }} values to check in total.
            </p>
            <simple-card />
          </template>
        </div>
      </div>
    </div>
  </my-modal>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification'
import { useAnnotations } from '~/composables/annotations'
import { useTemplates } from '~/composables/templates'
import axios from 'axios'
import to from 'await-to-js'

const mockLabelCount = ref(6)
const mockDocumentCount = ref(10)
const {
  showNewTemplateModal,
  steps,
  newTemplateImage,
  newTemplateStep,
  templateImages,
  templateAnnotations,
  templateRawAnnotations,
  selectedTemplateIndex,
  firstTemplateReady,
  templateFiles,
} = useTemplates()

const {
  getRawAnnotations,
  annotations,
  toggleAnnotations,
  processedAnnotations,
} = useAnnotations()
const toast = useToast()
const startLabeling = () => {
  if (templateImages.value.length < 5) {
    toast.warning('Please upload at least 5 samples before proceeding')
    return
  }
  newTemplateStep.value = 1
  const totalTemplates = templateImages.value.length
  templateAnnotations.value = []
  templateRawAnnotations.value = []
  for (let i = 0; i < totalTemplates; i++) {
    templateAnnotations.value.push([])
    templateRawAnnotations.value.push([])
  }
}

const handleAdvanceTemplate = async () => {
  if (selectedTemplateIndex.value === 0 && !firstTemplateReady.value) {
    firstTemplateReady.value = true
    for (let i = 0; i < templateAnnotations.value.length; i++) {
      templateAnnotations.value[i] = JSON.parse(
        JSON.stringify(annotations.value)
      )
      templateRawAnnotations.value[i] = getRawAnnotations()
    }
  }
  if (selectedTemplateIndex.value === templateImages.value.length - 1) {
    // TODO: Uncomment below after integrating with BE
    await submitTemplate()
    newTemplateStep.value = 2
    return
  }
  changeCurrentTemplate(selectedTemplateIndex.value + 1)
}

const submitTemplate = async () => {
  const payload = new FormData()
  for (const file of templateFiles.value) {
    payload.append('files', file)
  }
  payload.append('annotations', JSON.stringify(templateAnnotations.value))

  // const [err, res] = await to(
  //   axios.post('/api/create_template_multidata', payload)
  // )
  // if (err) {
  //   console.error(err)
  //   return
  // }
  const res: any = {
    message: [
      {
        price: '$ 23.21',
        cycle: '1/20',
      },
      {
        price: '$ 23.21',
        cycle: '1/20',
      },
      {
        price: '$ 23.21',
        cycle: '1/20',
      },
      {
        price: '$ 23.21',
        cycle: '1/20',
      },
      {
        price: '$ 23.21',
        cycle: '1/20',
      },
      {
        price: '$ 23.21',
        cycle: '1/20',
      },
    ],
  }
  templateFiles.value.forEach((templateFile, i) => {
    templateAnnotations.value[i].forEach((annotation, j) => {
      const ocrValues = res.message[i]
      const formattedAnnotation = {
        fileIndex: i,
        name: annotation.name,
        id: annotation.id,
        top: annotation.top,
        left: annotation.left,
        width: annotation.width,
        height: annotation.height,
        ocrValue: ocrValues[annotation.name],
      }
      processedAnnotations.value.push(formattedAnnotation)
    })
  })
  console.log(processedAnnotations.value)
  toggleAnnotations()
  selectedTemplateIndex.value = 0
}

const changeCurrentTemplate = (newIndex: number) => {
  const oldIndex = selectedTemplateIndex.value
  const oldRawAnnotations = getRawAnnotations()
  templateRawAnnotations.value[oldIndex] = oldRawAnnotations
  templateAnnotations.value[oldIndex] = JSON.parse(
    JSON.stringify(annotations.value)
  )
  selectedTemplateIndex.value = newIndex
  annotations.value = JSON.parse(
    JSON.stringify(templateAnnotations.value[newIndex])
  )
}
</script>

<style>
.a9s-annotation.hovered .a9s-outer {
  fill: #f9af3f30 !important;
  stroke: #675bf5 !important;
  stroke-width: 1px !important;
}
.a9s-annotation.selected .a9s-outer {
  fill: none !important;
}
.a9s-annotation.selected .a9s-inner {
  stroke: #675bf5 !important;
}
.a9s-inner {
  stroke: #675bf5 !important;
}
.a9s-outer {
  stroke-width: 0px !important;
  fill: #675bf540 !important;
}
</style>

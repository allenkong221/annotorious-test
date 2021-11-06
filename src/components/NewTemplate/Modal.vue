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
        <template v-if="newTemplateStep < 2">
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
              <span class="text-small text-secondary"
                >Give your template a name</span
              >
              <my-input
                v-model="newTemplateName"
                class="mb-6 border-gray3"
                placeholder="Template Name"
              />
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
                and give it a label. Once you've finished labeling, click
                'Next'.
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
                For each label, please verify if the values are correct. This
                will improve the accuracy of the model and save you more time in
                the future.
              </p>
              <p class="text-gray4 text-p mb-4">
                There are {{ mockLabelCount }} labels x
                {{ mockDocumentCount }} documents =
                {{ mockLabelCount * mockDocumentCount }} values to check in
                total.
              </p>
              <simple-card />
            </template>
          </div>
        </template>
        <template v-else-if="newTemplateStep === 2">
          <new-template-verification-step />
        </template>
      </div>
      <transition name="loader">
        <div
          class="
            z-100
            bg-white
            w-full
            h-full
            flex
            justify-center
            items-center
            absolute
            top-0
            left-0
          "
          @click.stop
          v-if="showLoader"
        >
          <div class="flex items-center">
            <h2 class="text-h2 font-bold mr-2">Processing</h2>
            <div class="lds-dual-ring"></div>
          </div>
        </div>
      </transition>
    </div>
  </my-modal>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification'
import { useAnnotations } from '~/composables/annotations'
import { useTemplates } from '~/composables/templates'
import { ProcessedAnnotation } from '~/types/customTypes'
import axios from 'axios'
import { to } from 'await-to-js'
import { useLoader } from '~/composables/loader'

const mockLabelCount = ref(6)
const mockDocumentCount = ref(10)
const { showLoader } = useLoader()
const {
  showNewTemplateModal,
  steps,
  newTemplateImage,
  newTemplateStep,
  templateImages,
  templateAnnotations,
  templateRawAnnotations,
  selectedTemplateIndex,
  newTemplateName,
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
  } else if (newTemplateName.value === '') {
    toast.warning('Please set a name for your template')
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
  payload.append('name', newTemplateName.value)
  console.log(payload)
  showLoader.value = true
  // const [err, res] = await to(
  //   axios.post('/api/create_template_multidata', payload)
  // )
  // showLoader.value = false
  // if (err) {
  //   console.error(err)
  //   return
  // }
  // console.log(res)
  const res: any = {
    data: {
      message: [
        {
          date: '07/15/2020',
          price: '$ 23.21',
        },
        {
          date: '07/15/2020',
          price: '$ 23.21',
        },
        {
          date: '07/15/2020',
          price: '$ 23.21',
        },
        {
          date: '07/15/2020',
          price: '$ 23.21',
        },
        {
          date: '07/15/2020',
          price: '$ 23.21',
        },
        {
          date: '07/15/2020',
          price: '$ 23.21',
        },
      ],
    },
  }
  showLoader.value = false
  const tempAnnotations: ProcessedAnnotation[] = []
  templateFiles.value.forEach((templateFile, i) => {
    templateAnnotations.value[i].forEach((annotation, j) => {
      const ocrValues = res.data.message[i]
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
      tempAnnotations.push(formattedAnnotation)
    })
  })
  const annotationIds = [
    ...new Set(tempAnnotations.map((annotation) => annotation.id)),
  ]

  for (let i = 0; i < annotationIds.length; i++) {
    processedAnnotations.value = [
      ...processedAnnotations.value,
      ...tempAnnotations.filter(
        (annotation) => annotation.id === annotationIds[i]
      ),
    ]
  }
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
  fill: #f9af3f40 !important;
  stroke: #f9af3f !important;
  stroke-width: 1px !important;
}
.a9s-annotation.selected .a9s-outer {
  fill: none !important;
}
.a9s-annotation.selected .a9s-inner {
  stroke: #f9af3f !important;
}
.a9s-inner {
  stroke: #f9af3f !important;
}
.a9s-outer {
  stroke-width: 0px !important;
  fill: #f9af3f40 !important;
}

.loader-enter,
.loader-enter-from,
.loader-leave-to {
  opacity: 0;
}
.loader-enter-active,
.loader-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.lds-dual-ring {
  display: inline-block;
  width: 20px;
  height: 20px;
}
.lds-dual-ring:after {
  content: ' ';
  display: block;
  width: 16px;
  height: 16px;
  margin: 2px;
  border-radius: 50%;
  border: 3px solid #000;
  border-color: #000 transparent #000 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

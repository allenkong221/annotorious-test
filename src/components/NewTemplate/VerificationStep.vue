<template>
  <div class="flex w-full">
    <div
      class="w-4/10 border border-secondary bg-gray1 flex flex-col h-full p-10"
    >
      <div class="flex items-center mb-2">
        <i-pepicons-label class="mr-1 text-small text-secondary" />
        <p class="text-small">
          {{ currentIndex + 1 }} of {{ processedAnnotations.length }} Checks
        </p>
      </div>
      <h2 class="text-h2 font-bold mb-2">3. Verify Retrieved Values</h2>
      <p class="text-p mb-4">
        Verify if the value from the document is the same. If the value is not
        correct, please edit it and then click "Yes"
      </p>
      <div
        class="flex flex-col"
        v-if="!showRejectionDetails && !showSetCorrectValue"
      >
        <h5 class="text-h3 font-bold mb-4">
          Is this the correct value for this document's
          <span class="text-secondary">{{
            processedAnnotations[currentIndex].name
          }}</span
          >?
        </h5>
        <span class="text-h4 text-center mb-4 font-bold">{{ tempValue }}</span>
        <!-- <my-input class="mb-6" v-model="tempValue" /> -->
        <div class="flex">
          <my-button
            type="secondary"
            outlined
            class="flex-1"
            @click="showRejectionDetails = true"
            >Not sure</my-button
          >
          <my-button
            type="secondary"
            outlined
            class="flex-1 mx-2"
            @click="showSetCorrectValue = true"
            >No</my-button
          >
          <my-button type="secondary" class="flex-1" @click="acceptAnnotation"
            >Yes</my-button
          >
        </div>
      </div>
      <div v-if="showRejectionDetails" class="flex flex-col">
        <div class="flex items-center mb-3">
          <i-mdi-chevron-left
            class="text-p mr-1 cursor-pointer"
            @click="showRejectionDetails = false"
          />
          <h5 class="text-h4 font-bold">Reasons for the uncertainty:</h5>
        </div>
        <div
          v-for="rejectionReason in rejectionDetails"
          class="flex items-center pl-5 mb-1"
        >
          <input
            :name="rejectionReason.name"
            type="checkbox"
            class="mr-2"
            v-model="rejectionReason.value"
          />
          <label :for="rejectionReason.name" class="text-small">{{
            rejectionReason.label
          }}</label>
        </div>
        <my-button
          @click="advancedRejectAnnotation"
          type="secondary"
          class="w-1/2 mt-4 mx-auto"
          >Submit</my-button
        >
      </div>
      <div v-if="showSetCorrectValue" class="flex flex-col">
        <div class="flex items-center mb-3">
          <i-mdi-chevron-left
            class="text-p mr-1 cursor-pointer"
            @click="showSetCorrectValue = false"
          />
          <h5 class="text-h4 font-bold">
            Please type the correct value for
            <span class="text-secondary">{{
              processedAnnotations[currentIndex].name
            }}</span>
          </h5>
        </div>
        <my-input
          v-model="tempValue"
          class="border-gray2"
          :placeholder="tempValue"
        />
        <my-button
          @click="advancedRejectAnnotation"
          type="secondary"
          class="w-1/2 mt-4 mx-auto"
          >Submit</my-button
        >
      </div>
    </div>
    <div class="w-6/10 h-full overflow-y-auto relative">
      <img
        ref="imgRef"
        :src="templateImages[processedAnnotations[currentIndex].fileIndex]"
      />
      <div
        class="absolute border-2 border-primary bg-primary bg-opacity-25"
        :style="{
          top: `${processedAnnotations[currentIndex].top * imgScale}px`,
          left: `${processedAnnotations[currentIndex].left * imgScale}px`,
          width: `${processedAnnotations[currentIndex].width * imgScale}px`,
          height: `${processedAnnotations[currentIndex].height * imgScale}px`,
        }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAnnotations } from '~/composables/annotations'
import { useTemplates } from '~/composables/templates'
import axios from 'axios'
import { to } from 'await-to-js'

const { templateImages, templateFiles } = useTemplates()
const { processedAnnotations } = useAnnotations()
const currentIndex = ref(0)
const tempValue = ref('')
const imgScale = ref(0)
const imgRef = ref<HTMLImageElement>()
const showRejectionDetails = ref(false)
const showSetCorrectValue = ref(false)
const rejectionDetails = ref([
  {
    name: 'blank',
    label: `It's blank.`,
    value: false,
  },
  {
    name: 'unclear',
    label: `The handwriting is unclear.`,
    value: false,
  },
  {
    name: 'illegible',
    label: `The text is illegible due to color contrast.`,
    value: false,
  },
  {
    name: 'location',
    label: `The value is placed in a weird location on the page.`,
    value: false,
  },
  {
    name: 'context',
    label: `There's a lack of context to interpret the value.`,
    value: false,
  },
  {
    name: 'other',
    label: `Other reasons.`,
    value: false,
  },
])

const emits = defineEmits(['submit'])
watch(
  currentIndex,
  (val) => {
    tempValue.value = processedAnnotations.value[val].ocrValue
    showRejectionDetails.value = false
    showSetCorrectValue.value = false
    for (const rejection of rejectionDetails.value) {
      rejection.value = false
    }
    const tempImg = new Image()
    tempImg.src =
      templateImages.value[processedAnnotations.value[val].fileIndex]
    tempImg.onload = () => {
      imgScale.value = imgRef.value?.width! / tempImg.width
    }
  },
  { immediate: true }
)

const submit = async () => {
  emits('submit')
  console.log(processedAnnotations.value)
  const formData = new FormData()
  formData.append('file', templateFiles.value[0])
  formData.append('results', JSON.stringify(processedAnnotations.value))
  const [err, res] = await to(axios.post('/api/verification', formData))
  if (err) {
    console.error(err)
    return
  }
  console.log(res)
}
const simpleRejectAnnotation = () => {
  processedAnnotations.value[currentIndex.value].finalValue = tempValue.value
  processedAnnotations.value[currentIndex.value].resultApproved = false
  if (currentIndex.value + 1 !== processedAnnotations.value.length)
    currentIndex.value++
  else submit()
}
const advancedRejectAnnotation = () => {
  processedAnnotations.value[currentIndex.value].finalValue = tempValue.value
  processedAnnotations.value[currentIndex.value].resultApproved = false
  processedAnnotations.value[currentIndex.value].failReason =
    rejectionDetails.value.filter((item) => item.value).map((item) => item.name)
  if (currentIndex.value + 1 !== processedAnnotations.value.length)
    currentIndex.value++
  else submit()
}
const acceptAnnotation = () => {
  processedAnnotations.value[currentIndex.value].finalValue = tempValue.value
  processedAnnotations.value[currentIndex.value].resultApproved = true
  if (currentIndex.value + 1 !== processedAnnotations.value.length)
    currentIndex.value++
  else submit()
}

const correctAnnotation = () => {
  processedAnnotations.value[currentIndex.value].finalValue = tempValue.value
  processedAnnotations.value[currentIndex.value].resultApproved = false
  if (currentIndex.value + 1 !== processedAnnotations.value.length)
    currentIndex.value++
  else submit()
}
</script>

<style scoped></style>

import { FormattedAnnotation } from '~/types/customTypes'

const templateImages = ref<string[]>([])
const templateFiles = ref<File[]>([])
const newTemplateImage = ref()
const newTemplateFile = ref()
const newTemplateStep = ref(0)
const showNewTemplateModal = ref(false)
const selectedTemplateIndex = ref(0)
const templateAnnotations = ref<Array<FormattedAnnotation[]>>([])
const templateRawAnnotations = ref<any[][]>([])
export const useTemplates = () => {
  return {
    steps: [{ name: 'Upload sample document' }, { name: 'Manage labels' }],
    templateImages,
    templateFiles,
    newTemplateStep,
    showNewTemplateModal,
    selectedTemplateIndex,
    newTemplateImage: newTemplateImage,
    newTemplateFile: newTemplateFile,
    templateAnnotations,
    templateRawAnnotations,
    setNewTemplate: (files: FileList) => {
      newTemplateFile.value = files[0]
      newTemplateImage.value = URL.createObjectURL(files[0])
    },
    setTemplates: (files: FileList) => {
      templateFiles.value = []
      templateImages.value = []
      for (const file of files) {
        templateFiles.value.push(file)
        templateImages.value.push(URL.createObjectURL(file))
      }
    },
    removeTemplate: (index: number) => {
      templateFiles.value.splice(index, 1)
      templateImages.value.splice(index, 1)
    },
    addTemplates: (files: FileList) => {
      for (const file of files) {
        templateFiles.value.push(file)
        templateImages.value.push(URL.createObjectURL(file))
      }
    },
  }
}

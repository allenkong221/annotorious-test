export const useTemplates = () => {
  const templateImages = ref<string[]>([])
  const templateFiles = ref<File[]>([])
  const newTemplateImage = ref()
  const newTemplateFile = ref()
  const newTemplateStep = ref(0)
  return {
    steps: [{ name: 'Upload sample document' }, { name: 'Manage labels' }],
    templateImages,
    templateFiles,
    newTemplateStep,
    newTemplateImage: newTemplateImage,
    newTemplateFile: newTemplateFile,
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

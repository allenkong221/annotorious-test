// @ts-ignore (annotorious lib is not typed)
import { Annotorious } from '@recogito/annotorious'
import {
  Annotation,
  AnnotationSelection,
  FormattedAnnotation,
} from '~/types/customTypes'
import '@recogito/annotorious/dist/annotorious.min.css'
import { useTemplates } from './templates'
import { useMousePressed } from '@vueuse/core'

const translateAnnotationInfo = (value: string) => {
  const cleanValue = value.substr(11)
  const splitValues = cleanValue.split(',')
  return {
    left: parseInt(splitValues[0]),
    top: parseInt(splitValues[1]),
    width: parseInt(splitValues[2]),
    height: parseInt(splitValues[3]),
  }
}
const anno = ref()
const selectedAnnotationId = ref('')
const annotations = ref<FormattedAnnotation[]>([])
const { selectedTemplateIndex, templateAnnotations } = useTemplates()
const isUserEditing = ref(false)
const { pressed } = useMousePressed()
watch(pressed, (val) => {
  if (!val && isUserEditing.value) {
    isUserEditing.value = false
  }
})

export const useAnnotations = () => {
  return {
    anno,
    selectedAnnotationId,
    annotations,
    isUserEditing,
    initAnnotations: (imageRef: HTMLImageElement) => {
      // Creates a new annotorious instance on headless mode
      anno.value = new Annotorious({
        image: imageRef,
        disableEditor: true,
      })
      anno.value.on(
        'createSelection',
        async (selection: AnnotationSelection) => {
          // This saves the created selection, triggering the createAnnotation event
          await anno.value.updateSelected(selection, true)
        }
      )
      anno.value.on('cancelSelected', (selection: Selection) => {
        selectedAnnotationId.value = ''
      })
      anno.value.on('changeSelectionTarget', (val: any) => {
        console.log(val)
        isUserEditing.value = true
        setTimeout(() => {
          if (!pressed.value) {
            isUserEditing.value = false
            annotations.value.forEach((ann, i) => {
              if (selectedAnnotationId.value === ann.id) {
                annotations.value[i] = {
                  ...annotations.value[i],
                  ...translateAnnotationInfo(val.selector.value),
                }
              }
            })
          }
        }, 200)
      })
      anno.value.on(
        'updateAnnotation',
        (newAnnotation: Annotation, prevAnnotation: Annotation) => {
          annotations.value.forEach((ann, i) => {
            if (prevAnnotation.id === ann.id) {
              annotations.value[i] = {
                ...annotations.value[i],
                ...translateAnnotationInfo(newAnnotation.target.selector.value),
              }
            }
          })
        }
      )
      anno.value.on('createAnnotation', (annotation: Annotation) => {
        annotations.value.push({
          name: '',
          id: annotation.id,
          ...translateAnnotationInfo(annotation.target.selector.value),
          new: true,
        })
        anno.value.selectAnnotation(annotation.id)
        selectedAnnotationId.value = annotation.id
      })
      anno.value.on('selectAnnotation', (annotation: Annotation) => {
        selectedAnnotationId.value = annotation.id
      })
    },
    cancelSelection: () => {
      anno.value.cancelSelected()
    },
    removeAnnotation: (annotationId: string) => {
      const deletedIndex = annotations.value.findIndex(
        (annotation) => annotation.id === annotationId
      )
      anno.value.removeAnnotation(annotationId)
      selectedAnnotationId.value = ''
      annotations.value.splice(deletedIndex, 1)
      anno.value.cancelSelected()
      templateAnnotations.value[selectedTemplateIndex.value] = annotations.value
    },
    getCurrentAnnotations: () => {
      return annotations.value
    },
    saveCurrentAnnotation: () => {
      anno.value.saveSelected()
    },
    selectAnnotation: (annotationId: string) => {
      // Adding this timeout to handle user canceling selection by clicking on the label
      setTimeout(() => {
        selectedAnnotationId.value = annotationId
        anno.value.selectAnnotation(annotationId)
      }, 20)
    },
    getRawAnnotations: () => {
      return anno.value.getAnnotations()
    },
    setRawAnnotations: (annotations: any) => {
      console.log(annotations)
      anno.value.setAnnotations(annotations)
    },
    destroyAnnotations: () => {
      anno.value.destroy()
    },
  }
}

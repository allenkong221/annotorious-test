// @ts-ignore
import { Annotorious } from '@recogito/annotorious'
import { Ref, ref } from 'vue'
import { Annotation, FormattedAnnotation } from '~/types/customTypes'
// import ShapeLabelsFormatter from '@recogito/annotorious-shape-labels'

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

export const anno = ref()
export const selectedAnnotationId = ref('')
export const annotations = ref<Array<FormattedAnnotation>>([])
export const useAnnotations = () => {
  return {
    initAnnotations(imageRef: Ref) {
      anno.value = new Annotorious({
        image: imageRef,
        disableEditor: true,
      })
      anno.value.on('createSelection', async (selection: any) => {
        await anno.value.updateSelected(selection, true)
      })
      anno.value.on('cancelSelected', () => {
        // selectedAnnotationId.value = ''
      })
      anno.value.on(
        'updateAnnotation',
        (annotation: Annotation, prev: Annotation) => {
          console.log('updating')
          annotations.value.forEach((ann, i) => {
            if (prev.id === ann.id) {
              annotations.value[i] = {
                ...annotations.value[i],
                ...translateAnnotationInfo(annotation.target.selector.value),
              }
            }
          })
        }
      )
      anno.value.on('createAnnotation', (annotation: Annotation) => {
        // annotations.value = this.getAnnotations()
        annotations.value.push({
          name: '',
          id: annotation.id,
          ...translateAnnotationInfo(annotation.target.selector.value),
        })
        anno.value.selectAnnotation(annotation.id)
        selectedAnnotationId.value = annotation.id
      })
      anno.value.on('selectAnnotation', (annotation: Annotation) => {
        console.log('selected', annotation.id)
        selectedAnnotationId.value = annotation.id
      })
      anno.value.on('deleteAnnotation', (annotation: Annotation) => {
        const deletedId = annotation.id
        selectedAnnotationId.value = ''
        const deletedIndex = annotations.value.findIndex(
          (annotation) => annotation.id === deletedId
        )
        annotations.value.splice(deletedIndex, 1)
      })
    },
    getAnnotations() {
      if (!anno.value) {
        console.error('Annotations not initialized')
        return []
      }
      console.log(anno.value.getAnnotations())
      return anno.value.getAnnotations().map((annotation: Annotation) => {
        return {
          name: annotation.body[0].value,
          id: annotation.id,
          ...translateAnnotationInfo(annotation.target.selector.value),
        }
      })
    },
    selectAnnotation(id: string) {
      selectedAnnotationId.value = id
      anno.value.selectAnnotation(id)
    },
    clearSelection() {
      selectedAnnotationId.value = ''
      anno.value.cancelSelected()
    },
    deleteAnnotation(id: string) {
      const deletedIndex = annotations.value.findIndex(
        (annotation) => annotation.id === id
      )
      anno.value.removeAnnotation(id)
      selectedAnnotationId.value = ''
      annotations.value.splice(deletedIndex, 1)
      setTimeout(() => {
        anno.value.cancelSelected()
      }, 50)
    },
  }
}

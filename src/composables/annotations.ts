// @ts-ignore
import { Annotorious } from '@recogito/annotorious'
import { Ref, ref } from 'vue'
import { Annotation, FormattedAnnotation } from '~/types/customTypes'

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
export const annotations = ref<Array<FormattedAnnotation>>([])
export const useAnnotations = () => {
  return {
    initAnnotations(imageRef: Ref) {
      anno.value = new Annotorious({
        image: imageRef,
        widgets: ['COMMENT'],
      })
      anno.value.on('createAnnotation', (annotation: Annotation) => {
        // annotations.value = this.getAnnotations()
        annotations.value.push({
          name: annotation.body[0].value,
          id: annotation.id,
          ...translateAnnotationInfo(annotation.target.selector.value),
        })
      })
      anno.value.on(
        'updateAnnotation',
        (annotation: Annotation, prev: Annotation) => {
          annotations.value.forEach((ann, i) => {
            if (prev.id === ann.id) {
              annotations.value[i] = {
                name: annotation.body[0].value,
                id: annotation.id,
                ...translateAnnotationInfo(annotation.target.selector.value),
              }
            }
          })
        }
      )
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
      anno.value.selectAnnotation(id)
    },
  }
}

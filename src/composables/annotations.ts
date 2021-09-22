// @ts-ignore
import { Annotorious } from '@recogito/annotorious'
import { Ref, ref } from 'vue'
import { Annotation, FormattedAnnotation } from '~/types/customTypes'
import ShapeLabelsFormatter from '@recogito/annotorious-shape-labels'

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

const LabelWidget = (args: any) => {
  const input = document.createElement('input')
  input.type = 'text'
  input.id = 'test'
  const currentLabelBody = args.annotation
    ? args.annotation.bodies.find((b: any) => b.purpose === 'labeling')
    : null

  const currentLabelValue = currentLabelBody ? currentLabelBody.value : null
  input.value = currentLabelValue
  const addChange = (event) => {
    console.log(args)
    if (currentLabelBody) {
      console.log(currentLabelBody)
      args.onUpdateBody(currentLabelBody, {
        type: 'TextualBody',
        purpose: 'labeling',
        value: event.target.value,
      })
    } else {
      args.onAppendBody({
        type: 'TexualBody',
        purpose: 'labeling',
        value: event.target.value,
      })
    }
    setTimeout(() => {
      document.getElementById('test')?.focus()
    }, 10)
  }
  input.addEventListener('input', addChange)
  const container = document.createElement('div')
  container.className = 'label-widget'
  container.appendChild(input)
  return container
}

const anno = ref()
export const annotations = ref<Array<FormattedAnnotation>>([])
export const useAnnotations = () => {
  return {
    initAnnotations(imageRef: Ref) {
      console.log(ShapeLabelsFormatter)
      anno.value = new Annotorious({
        image: imageRef,
        formatter: ShapeLabelsFormatter(),
        // widgets: ['COMMENT', LabelWidget],
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
      anno.value.on('deleteAnnotation', (annotation: Annotation) => {
        const deletedId = annotation.id
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
      anno.value.selectAnnotation(id)
    },
    deleteAnnotation(id: string) {
      const deletedIndex = annotations.value.findIndex(
        (annotation) => annotation.id === id
      )
      anno.value.removeAnnotation(id)
      annotations.value.splice(deletedIndex, 1)
      setTimeout(() => {
        anno.value.cancelSelected()
      }, 100)
    },
  }
}

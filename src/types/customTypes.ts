type AnnotationWidget = {
  purpose: string
  type: string
  value: string
}
export type Annotation = {
  body: Array<AnnotationWidget>
  id: string
  target: {
    selector: {
      value: string
    }
  }
}

export type FormattedAnnotation = {
  name: string
  id: string
  top: number
  left: number
  width: number
  height: number
}

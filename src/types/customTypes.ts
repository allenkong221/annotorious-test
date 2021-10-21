export interface Step {
  name: string
}

export interface AnnotationWidget {
  purpose: string
  type: string
  value: string
}

export interface Annotation {
  body: Array<AnnotationWidget>
  id: string
  target: {
    selector: {
      value: string
    }
  }
}

export interface FormattedAnnotation {
  name: string
  id: string
  top: number
  left: number
  width: number
  height: number
  new: boolean
}

export interface ProcessedAnnotation {
  name: string
  id: string
  top: number
  left: number
  width: number
  height: number
  ocrValue: any
  fileIndex: number
}

export interface templateCreationResponse {
  message:
}
export interface AnnotationSelection {
  body: Array<any>
  target: {
    source: string
    selector: {
      type: string
      value: string
      conformsTo: string
    }
  }
  type: string
}

export interface Template {
  image: any
  annotations: FormattedAnnotation[]
}

export interface TemplateGroup {
  templates: Template[]
}

export interface ProcessedTemplate {
  image: any
  user: string
  annotations: ProcessedAnnotation[]
}

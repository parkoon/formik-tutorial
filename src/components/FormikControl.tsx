import React from 'react'
import Input from './Input'

type Control = 'input' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date'
type FormikControlProps = {
  control: Control
  label: string
  name: string
  type: string
}
function FormikControl({ control, ...props }: FormikControlProps) {
  switch (control) {
    case 'input':
      return <Input {...props} />
    case 'textarea':
    case 'select':
    case 'radio':
    case 'checkbox':
    case 'date':
    default:
      return null
  }
}

export default FormikControl

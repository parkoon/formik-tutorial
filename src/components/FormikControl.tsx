import React from 'react'

type Control = 'input' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date'
type FormikControlProps = {
  control: Control
}
function FormikControl({ control }: FormikControlProps) {
  switch (control) {
    case 'input':
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

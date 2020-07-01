import React from 'react'
import Input from './Input'
import Textarea from './Textarea'
import Select, { Option } from './Select'

type Control = 'input' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date'
type FormikControlProps = {
  control: Control
  label: string
  name: string
  type?: string
  options?: Option[]
}
function FormikControl({ control, options, ...props }: FormikControlProps) {
  switch (control) {
    case 'input':
      return <Input {...props} />
    case 'textarea':
      return <Textarea {...props} />
    case 'select':
      return <Select options={options} {...props} />
    case 'radio':
    case 'checkbox':
    case 'date':
    default:
      return null
  }
}

export default FormikControl

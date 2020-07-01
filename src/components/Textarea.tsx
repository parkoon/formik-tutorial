import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

type TextareaProps = {
  label: string
  name: string
}
function Textarea({ label, name, ...props }: TextareaProps) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...props} />
      <ErrorMessage name={name}>
        {(errorMessage) => <TextError>{errorMessage}</TextError>}
      </ErrorMessage>
    </div>
  )
}

export default Textarea

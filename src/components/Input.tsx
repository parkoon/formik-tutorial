import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

type InputProps = {
  label: string
  name: string
}
function Input({ label, name, ...props }: InputProps) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...props} />
      <ErrorMessage name={name}>
        {(errorMessage) => <TextError>{errorMessage}</TextError>}
      </ErrorMessage>
    </div>
  )
}

export default Input

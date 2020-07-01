import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

export type Option = {
  key: string
  value: string
}
type SelectProps = {
  label: string
  name: string
  options?: Option[]
}
function Select({ label, name, options = [], ...props }: SelectProps) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...props}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          )
        })}
      </Field>
      <ErrorMessage name={name}>
        {(errorMessage) => <TextError>{errorMessage}</TextError>}
      </ErrorMessage>
    </div>
  )
}

export default Select

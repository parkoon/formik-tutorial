import React from 'react'
import { Formik, Form, FormikProps, yupToFormErrors } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

type FormValues = {
  email: string
}
function FormikContainer() {
  const initialValues: FormValues = {
    email: '',
  }
  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
  })
  const onSubmit = (values: FormValues) => console.log('Form data', values)
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik: FormikProps<FormValues>) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="email"
            name="email"
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer

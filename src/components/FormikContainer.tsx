import React from 'react'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'

type FormValues = {}
function FormikContainer() {
  const initialValues: FormValues = {}
  const validationSchema = Yup.object({})
  const onSubmit = (values: FormValues) => console.log('Form data', values)
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik: FormikProps<FormValues>) => (
        <Form>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer

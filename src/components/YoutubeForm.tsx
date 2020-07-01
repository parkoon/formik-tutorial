import React, { useState } from 'react'
import {
  useFormik,
  FormikConfig,
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldProps,
  FormikProps,
  FastField,
  FormikHelpers,
} from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

// https://www.reactnativeschool.com/build-and-validate-forms-with-formik-and-yup/handling-server-errors
const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: '',
  },
}
const savedValues = {
  name: 'parkoon',
  email: 'parkoon@gmail.com',
  channel: 'parkoon',
  comments: 'foo bar',
  address: 'Seoul',
  social: {
    facebook: 'f',
    twitter: 't',
  },
}

const onSubmit = (
  values: YoutubeFormValues,
  helper: FormikHelpers<YoutubeFormValues>
) => {
  console.log('submit...')
  helper.setSubmitting(false)
  helper.resetForm()
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required!'),
  email: Yup.string().required('Required').email('Invalid email form'),
  channel: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
})

const validateComments = (value: string) => {
  let error

  if (!value) {
    error = 'Required'
  }

  return error
}

type YoutubeFormValues = {
  name: string
  email: string
  channel: string
  comments: string
  address: string
  social: {
    facebook: string
    twitter: string
  }
}

function YoutubeForm() {
  const [formValues, setFormValues] = useState<YoutubeFormValues>()
  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
      //   validateOnChange={false}
      //   validateOnBlur={false}

      validateOnMount={true}
    >
      {(formik: FormikProps<YoutubeFormValues>) => {
        // console.log('formik', formik)
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div className="form-control">
              <label htmlFor="email">E-mail</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email">
                {(errorMessage) => <TextError>{errorMessage}</TextError>}
              </ErrorMessage>
            </div>

            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field
                type="text"
                id="channel"
                name="channel"
                placeholder="channel name"
              />
              <ErrorMessage name="channel" />
            </div>

            <div className="form-control">
              <label htmlFor="comments">Comments</label>
              <Field
                as="textarea"
                id="comments"
                name="comments"
                placeholder="comments"
                validate={validateComments}
              />
              <ErrorMessage name="comments" />
            </div>
            <div className="form-control">
              <label htmlFor="address">Address</label>
              <FastField id="address" name="address" placeholder="address">
                {({ field, form, meta }: FieldProps) => {
                  console.log('field render')
                  return (
                    <div>
                      <input type="text" id="address" {...field} />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  )
                }}
              </FastField>
            </div>
            <div className="form-control">
              <label htmlFor="facebook">Facebook profile</label>
              <Field type="text" id="facebook" name="social.facebook" />
            </div>
            <div className="form-control">
              <label htmlFor="twitter">Facebook profile</label>
              <Field type="text" id="twitter" name="social.twitter" />
            </div>

            <button
              type="button"
              onClick={() => formik.validateField('comments')}
            >
              Validate Comments
            </button>
            <button type="button" onClick={() => formik.validateForm()}>
              Validate all
            </button>
            <button
              type="button"
              onClick={() => formik.setFieldTouched('comments')}
            >
              Visit Comments
            </button>
            <button
              type="button"
              onClick={() =>
                formik.setTouched({
                  name: true,
                  email: true,
                  channel: true,
                  comments: true,
                })
              }
            >
              Visit all
            </button>
            {/* <button type="submit" disabled={!(formik.dirty && formik.isValid)}> */}
            {/* <button type="submit" disabled={!formik.isValid}> */}

            <button type="button" onClick={() => setFormValues(savedValues)}>
              Load saved data
            </button>

            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default YoutubeForm

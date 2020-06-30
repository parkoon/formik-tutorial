import React from 'react'
import {
  useFormik,
  FormikConfig,
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldProps,
} from 'formik'
import * as Yup from 'yup'

const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  address: '',
}

const onSubmit = (values: YoutubeFormValues) => {
  console.log(values)
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required!'),
  email: Yup.string().required('Required').email('Invalid email form'),
  channel: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
})

type YoutubeFormValues = {
  name: string
  email: string
  channel: string
  comments: string
  address: string
}

function YoutubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" />
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" />
        </div>

        <div>
          <label htmlFor="channel">Channel</label>
          <Field
            type="text"
            id="channel"
            name="channel"
            placeholder="channel name"
          />
          <ErrorMessage name="channel" />
        </div>

        <div>
          <label htmlFor="comments">Comments</label>
          <Field
            as="textarea"
            id="comments"
            name="comments"
            placeholder="comments"
          />
          <ErrorMessage name="comments" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <Field id="address" name="address" placeholder="address">
            {({ field, form, meta }: FieldProps) => {
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              )
            }}
          </Field>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default YoutubeForm

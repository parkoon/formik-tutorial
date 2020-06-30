import React from 'react'
import { useFormik, FormikConfig } from 'formik'
import * as Yup from 'yup'

const validate = (values: YoutubeFormValues) => {
  // errors.name errors.email errors.channel
  let errors: YoutubeFormValues = {
    name: '',
    email: '',
    channel: '',
  }

  if (!values.name) {
    errors.name = '이름을 입력해주세요'
  }
  if (!values.email) {
    errors.email = '이메일을 입력해주세요'
  }
  if (!values.channel) {
    errors.channel = '채널을 입력해주세요'
  }

  return errors
}

const initialValues = {
  name: '',
  email: '',
  channel: '',
}

const onSubmit = (values: YoutubeFormValues) => {
  console.log(values)
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required!'),
  email: Yup.string().required('Required').email('Invalid email form'),
  channel: Yup.string().required('Required'),
})

type YoutubeFormValues = {
  name: string
  email: string
  channel: string
}

function YoutubeForm() {
  const formik = useFormik<YoutubeFormValues>({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  })

  console.log('visited field...', formik.touched)
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.channel}
        />
        {formik.touched.channel && formik.errors.channel ? (
          <div className="error">{formik.errors.channel}</div>
        ) : null}
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

export default YoutubeForm

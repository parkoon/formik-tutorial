import React from 'react'
import { useFormik, FormikConfig } from 'formik'

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

type YoutubeFormValues = {
  name: string
  email: string
  channel: string
}

function YoutubeForm() {
  const formik = useFormik<YoutubeFormValues>({
    initialValues,
    onSubmit,
    validate,
  })

  console.log(formik.errors)
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />
        {formik.errors.channel ? (
          <div className="error">{formik.errors.channel}</div>
        ) : null}
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

export default YoutubeForm

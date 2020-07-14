import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { Field, Form, Formik, FormikProps, FormikHelpers } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

type FormValues = {
  name: string
  email: string
  password: string
  passwordConfirm: string
}

const initialValue: FormValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
}

const validationSchema = Yup.object({
  name: Yup.string().required('이름을 입력해주세요'),
  email: Yup.string()
    .required('이메일을 입력해주세요')
    .email('이메일 형식이 아닙니다'),
  password: Yup.string().required('패스워드을 입력해주세요'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), ''], '패스워드가 일치하지 않습니다')
    .required('패스워드를 입력해주세요'),
})

const handleSubmit = (
  values: FormValues,
  helpers: FormikHelpers<FormValues>
) => {
  alert(JSON.stringify(values, null, 4))
  helpers.setSubmitting(true)
  setTimeout(() => {
    helpers.setSubmitting(false)
  }, 3000)
}

export default function SignUp() {
  const classes = useStyles()

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <Formik
          initialValues={initialValue}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          validateOnMount
        >
          {({
            errors,
            touched,
            isValid,
            isSubmitting,
          }: FormikProps<FormValues>) => {
            return (
              <Form className={classes.form}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="name"
                      variant="outlined"
                      fullWidth
                      id="name"
                      label="Name"
                      error={errors.name && touched.name}
                      helperText={touched.name && errors.name}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      error={errors.email && touched.email}
                      helperText={touched.email && errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      error={errors.password && touched.password}
                      helperText={touched.password && errors.password}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      name="passwordConfirm"
                      label="Password Confirm"
                      type="password"
                      id="password-confirm"
                      error={errors.passwordConfirm && touched.passwordConfirm}
                      helperText={
                        touched.passwordConfirm && errors.passwordConfirm
                      }
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={!isValid || isSubmitting}
                >
                  Sign Up
                </Button>
              </Form>
            )
          }}
        </Formik>
      </div>
    </Container>
  )
}

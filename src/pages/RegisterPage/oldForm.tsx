import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import React, { useState } from 'react'

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

type initialValue = {
  name: string
  email: string
  password: string
  passwordConfirm: string
}

type Errors = {
  name: string
  email: string
  password: string
  passwordConfirm: string
}

type Valid = {
  name: boolean
  email: boolean
  password: boolean
  passwordConfirm: boolean
}

function isAllFieldValid(obj: any) {
  return !Object.keys(obj)
    .map((key) => obj[key])
    .includes(false)
}

const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i

export default function SignUp() {
  const classes = useStyles()

  const [values, setValues] = useState<Partial<initialValue>>({})
  const [errors, setErrors] = useState<Errors>({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })
  const [valid, setValid] = useState<Valid>({
    name: false,
    email: false,
    password: false,
    passwordConfirm: false,
  })
  const [isSubmitting, setSubmitting] = useState(false)

  const [startValidation, setStartValidation] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(values)
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
    }, 3000)
  }

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleBlur = ({ target }: React.FocusEvent<HTMLInputElement>) => {
    if (!startValidation) setStartValidation(true)
    const { name, value } = target

    switch (name) {
      case 'name': {
        if (!value) {
          setErrors({
            ...errors,
            name: '당신의 멋진 이름을 알고 싶어요.',
          })
          return
        }

        setErrors({
          ...errors,
          name: '',
        })

        setValid({
          ...valid,
          name: true,
        })
        return
      }

      case 'email': {
        if (!value) {
          setErrors({
            ...errors,
            email: '이메일 알려주세요.',
          })
          return
        }

        if (!emailRule.test(value)) {
          setErrors({
            ...errors,
            email: '이메일 형식 아시잖아요.',
          })
          return
        }

        setErrors({
          ...errors,
          email: '',
        })

        setValid({
          ...valid,
          email: true,
        })

        return
      }

      case 'password': {
        if (!value) {
          setErrors({
            ...errors,
            password: '당신의 비밀을 입력해주세요.',
          })

          return
        }

        setErrors({
          ...errors,
          password: '',
        })

        setValid({
          ...valid,
          password: true,
        })
        return
      }

      case 'passwordConfirm': {
        if (!value) {
          setErrors({
            ...errors,
            passwordConfirm: '당신의 비밀을 한번 더 입력해주세요',
          })

          return
        }

        if (values.password !== value) {
          setErrors({
            ...errors,
            passwordConfirm: '적은 비밀이 다릅니다.',
          })

          return
        }

        setErrors({
          ...errors,
          passwordConfirm: '',
        })

        setValid({
          ...valid,
          passwordConfirm: true,
        })
        return
      }

      default:
        return
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                variant="outlined"
                fullWidth
                id="name"
                label="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.name}
                error={!!errors.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.email}
                error={!!errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.password}
                error={!!errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="passwordConfirm"
                label="Password Confirm"
                type="password"
                id="password-confirm"
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.passwordConfirm}
                error={!!errors.passwordConfirm}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!isAllFieldValid(valid) || isSubmitting}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  )
}

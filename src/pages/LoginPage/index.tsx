import React from 'react'
import { MailFilled, KeyOutlined } from '@ant-design/icons'
import { Row, Col, Button, Input } from 'antd'
import { Form, Formik, Field, FieldProps, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from '../../components/TextError'

type LoginForm = {
  email: string
  password: string
}

const InitialValue: LoginForm = {
  email: '',
  password: '',
}

const handleSubmit = (values: LoginForm) => {
  console.log('Form data...', values)
}

const validationSchema = Yup.object({
  email: Yup.string()
    .required('이메일을 입력해주세요.')
    .email('이메일 형식이 아닙니다.'),
  password: Yup.string().required('패스워드를 입력해주세요.'),
})

function LoginPage() {
  return (
    <Row>
      <Col span={12} offset={6}>
        <Formik
          initialValues={InitialValue}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <Row gutter={[0, 20]}>
              <Col span={24}>
                <Field name="email">
                  {({ form, field, meta }: FieldProps) => {
                    return (
                      <Input
                        id="email"
                        name="email"
                        size="large"
                        placeholder="이메일"
                        prefix={<MailFilled />}
                        {...field}
                      />
                    )
                  }}
                </Field>
              </Col>
              <Col span={24}>
                <Field name="password">
                  {({ form, field, meta }: FieldProps) => {
                    console.log(meta)
                    return (
                      <>
                        <Input
                          id="password"
                          name="password"
                          size="large"
                          placeholder="비밀번호"
                          prefix={<KeyOutlined />}
                          {...field}
                        />
                      </>
                    )
                  }}
                </Field>
                <ErrorMessage name="password">
                  {(errorMessage) => <TextError>{errorMessage}</TextError>}
                </ErrorMessage>
              </Col>
              <Col span={24}>
                <Button htmlType="submit" size="large" block type="primary">
                  로그인 하기
                </Button>
              </Col>
            </Row>
          </Form>
        </Formik>
      </Col>
    </Row>
  )
}

export default LoginPage

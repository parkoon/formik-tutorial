import React from 'react'
import { Typography } from 'antd'

const { Text } = Typography
type TextErrorProps = {
  children: React.ReactNode
}

function TextError({ children }: TextErrorProps) {
  return (
    <Text type="danger" style={{ display: 'block' }}>
      {children}
    </Text>
  )
}

export default TextError

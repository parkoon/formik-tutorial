import React from 'react'

type TextErrorProps = {
  children: React.ReactNode
}

function TextError({ children }: TextErrorProps) {
  return <div className="error">{children}</div>
}

export default TextError

import React, { ButtonHTMLAttributes } from 'react'
import * as Styles from './styles'

export type ButtonProps = {
  outlined?: boolean
  onClick?: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({
  children,
  outlined = false,
  ...props
}) => (
  <Styles.Wrapper outlined={outlined} {...props}>
    {children}
  </Styles.Wrapper>
)

export default Button

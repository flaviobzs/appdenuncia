import React, { InputHTMLAttributes, Ref, forwardRef } from 'react'
import * as Styles from './styles'

import Error from '../Error'

export type TextFieldProps = {
  name: string
  icon?: boolean
  error?: string
  value?: string
  placeholder?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = (
  { icon = true, name, value, error, placeholder, ...props }: TextFieldProps,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <Styles.Wrapper>
      <Styles.InputWrapper withIcon={icon} isError={!!error}>
        <input
          type="text"
          name={name}
          aria-label={name}
          ref={ref}
          value={value}
          placeholder={placeholder}
          {...props}
        ></input>
      </Styles.InputWrapper>

      {!!error && <Error>{error}</Error>}
    </Styles.Wrapper>
  )
}

export default forwardRef<HTMLInputElement, TextFieldProps>(TextField)

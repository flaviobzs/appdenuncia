import React, { useState, forwardRef, InputHTMLAttributes, Ref } from 'react'
import * as Styles from './styles'

import Error from '../Error'

export type PasswordFieldProps = {
  name: string
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const InputPassword = (
  { name, error, ...props }: PasswordFieldProps,
  ref: Ref<HTMLInputElement>
) => {
  const [visible, setVisible] = useState(false)

  return (
    <Styles.Wrapper>
      <Styles.InputWrapper isError={!!error}>
        <input
          type={visible ? 'text' : 'password'}
          name={name}
          ref={ref}
          {...props}
        />
        {visible ? (
          <Styles.IconOn
            onClick={() => setVisible(!visible)}
            data-testid="iconon"
          />
        ) : (
          <Styles.IconOff
            onClick={() => setVisible(!visible)}
            data-testid="iconoff"
          />
        )}
      </Styles.InputWrapper>

      {!!error && <Error>{error}</Error>}
    </Styles.Wrapper>
  )
}

export default forwardRef<HTMLInputElement, PasswordFieldProps>(InputPassword)

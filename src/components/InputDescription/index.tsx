import React, { InputHTMLAttributes, Ref, forwardRef } from 'react'
import * as Styles from './styles'

import Error from '../Error'

export type TextFieldProps = {
  name: string
  error?: string
  value?: string
  placeholder?: string
} & InputHTMLAttributes<HTMLTextAreaElement>

const InputDescription = ({
  name,
  value,
  error,
  placeholder,
  ...props
}: TextFieldProps) =>
  // ref: Ref<HTMLInputElement>
  {
    return (
      <Styles.Wrapper>
        <Styles.TextAreaWrapper
          isError={!!error}
          name={name}
          // ref={ref}
          value={value}
          placeholder={placeholder}
          {...props}
        ></Styles.TextAreaWrapper>

        {!!error && <Error>{error}</Error>}
      </Styles.Wrapper>
    )
  }

// export default forwardRef<HTMLInputElement, TextFieldProps>(InputDescription)
export default InputDescription

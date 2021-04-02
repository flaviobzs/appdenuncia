import React, { InputHTMLAttributes, forwardRef, Ref } from 'react'
import * as S from './styles'

type RadioValue = string | ReadonlyArray<string> | number

export type RadioProps = {
  label?: string
  name: string
  value?: RadioValue
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const InputRadio = (
  { label, name, value, error, ...props }: RadioProps,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <S.Wrapper htmlFor={name}>
      <S.Input
        id={name}
        name={name}
        type="radio"
        value={value}
        ref={ref}
        isError={!!error}
        {...props}
      />
      {!!label && <span>{label}</span>}
    </S.Wrapper>
  )
}

export default forwardRef<HTMLInputElement, RadioProps>(InputRadio)

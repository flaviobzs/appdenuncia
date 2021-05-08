import React from 'react'
// import * as S from './styles'
import Template from '../../templates/Auth'
import SignUpForm from './sign-up-form'

export default function ComplaintMap() {
  return (
    <Template title="Cadastrar" position="right">
      <SignUpForm />
    </Template>
  )
}

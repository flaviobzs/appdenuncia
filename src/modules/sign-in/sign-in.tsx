import React from 'react'
// import * as S from './styles'
import Template from '../../templates/Auth'
import SignInForm from './sign-in-form'

export default function SignIn() {
  return (
    <Template title="Entrar" position="left">
      <SignInForm />
    </Template>
  )
}

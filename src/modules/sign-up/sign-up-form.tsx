import React from 'react'

import InputText from 'components/InputText'
import InputPassword from 'components/InputPassword'
import Button from 'components/Button'
import Description from 'components/Description'
import Form from 'components/Form'
import Link from 'next/link'

export default function SignUpForm() {
  return (
    <Form>
      {/* ACTIVITY FIELD */}

      <Description>Nome</Description>
      <InputText name="email" placeholder="Digite seu nome" />
      <Description>E-mail</Description>
      <InputText name="email" placeholder="Digite seu e-mail" />
      <Description>Senha</Description>
      <InputPassword name="password" placeholder="Digite uma senha" />
      <Description>Confirmação de senha</Description>
      <InputPassword name="password" placeholder="Confirme sua senha" />
      <p>
        Já possui uma conta?
        <Link href="/sign-in">Entrar</Link>
      </p>

      <Button>CADASTRAR</Button>

      {/* LOADER */}
      {/* {isLoading && <Loader color='#82288d' />} */}
    </Form>
  )
}

import React from 'react'

import InputText from 'components/InputText'
import InputPassword from 'components/InputPassword'
import Button from 'components/Button'
import Description from 'components/Description'
import Form from 'components/Form'
import Link from 'next/link'

export default function SignInForm() {
  return (
    <Form>
      {/* ACTIVITY FIELD */}

      <Description>E-mail</Description>
      <InputText name="email" placeholder="Digite seu e-mail" />
      <Description>Senha</Description>
      <InputPassword name="password" placeholder="Digite sua senha" />
      <p>
        Não possui uma conta?
        <Link href="/sign-up">Cadastrar</Link>
      </p>

      <Button>ENTRAR</Button>

      {/* LOADER */}
      {/* {isLoading && <Loader color='#82288d' />} */}
    </Form>
  )
}

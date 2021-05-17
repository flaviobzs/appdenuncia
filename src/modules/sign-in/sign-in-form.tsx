import React from 'react'

import InputText from 'components/InputText'
import InputPassword from 'components/InputPassword'
import Button from 'components/Button'
import Description from 'components/Description'
import Form from 'components/Form'
import Link from 'next/link'
import { useAuth } from 'hooks/auth'
import { useForm } from 'react-hook-form'

export default function SignInForm() {
  const { user, signIn } = useAuth()
  const { register, control, handleSubmit, watch, errors } = useForm({
    mode: 'onBlur'
  })

  console.log(`errors`, errors)

  const onSubmit = async (data: any) => {

    console.log(data)
    // const response = await signIn({
    // email: data.email,
    // password: data.password
    // })
  }

  return (
    //  @ts-ignore

    <Form onSubmit={handleSubmit(onSubmit)}>
      
      {/* ACTIVITY FIELD */}
      <Description>E-mail</Description>
      <InputText
        name="email"
        placeholder="Digite seu e-mail"
        ref={register({
          required: 'Campo obrigatório',
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: 'Endereço de email inválido'
          }
        })}
        error={errors.email?.message}
      />
      <Description>Senha</Description>
      <InputPassword
        name="password"
        placeholder="Digite sua senha"
        ref={register({
          required: 'Campo obrigatório'
        })}
        error={errors.password?.message}
      />
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

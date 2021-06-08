import React from 'react'

import InputText from 'components/InputText'
import InputPassword from 'components/InputPassword'
import Button from 'components/Button'
import Description from 'components/Description'
import Form from 'components/Form'
import Link from 'next/link'
import { useAuth } from 'hooks/auth'
import { useForm } from 'react-hook-form'

import { DevTool } from '@hookform/devtools'

export default function SignUpForm() {
  const { user, signUp } = useAuth()
  const {
    register,
    control,
    handleSubmit,
    watch,
    errors,
    setError,
    clearErrors
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = async (data: any) => {
    const response = await signUp({
      email: data.email,
      first_name: data.name,
      password: data.password,
      password2: data.confirm_password
    })
  }

  let dataPassword = watch('password', '')

  return (
    <>
      {/* @ts-ignore */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* ACTIVITY FIELD */}
        <DevTool control={control} />
        <Description>Nome</Description>
        <InputText
          name="name"
          placeholder="Digite seu nome"
          ref={register({
            required: 'Campo obrigatório'
          })}
          error={errors.name?.message}
        />
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
          placeholder="Digite uma senha"
          error={errors.password?.message}
          ref={register({
            required: 'Campo obrigatório'
            // validate: (value) => {
            //   if (
            //     value.match(/^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
            //   ) {
            //     return
            //   } else {
            //     setError('confirm_password', {
            //       type: 'required',
            //       message: `A senha deve conter: \n - mínimo de 8 caracteres \n - mínimo de 1 número e 1 letra \n - um caracter especial`
            //     })
            //     return ''
            //   }
            // }
          })}
        />
        <Description>Confirmação de senha</Description>
        <InputPassword
          name="confirm_password"
          placeholder="Confirme sua senha"
          error={errors.confirm_password?.message}
          ref={register({
            required: 'Campo obrigatório',
            // pattern: {
            //   value: /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            //   message: `A senha deve conter: \n - mínimo de 8 caracteres \n - mínimo de 1 número e 1 letra \n - um caracter especial`
            // },
            validate: (value) => {
              if (value == dataPassword) {
                clearErrors('password')
                return
              } else {
                setError('password', {
                  type: 'required',
                  message: ''
                })
                return 'Confirmação não corresponde com a senha'
              }
            }
          })}
        />
        <p>
          Já possui uma conta?
          <Link href="/sign-in">Entrar</Link>
        </p>

        <Button>CADASTRAR</Button>

        {/* LOADER */}
        {/* {isLoading && <Loader color='#82288d' />} */}
      </Form>
    </>
  )
}

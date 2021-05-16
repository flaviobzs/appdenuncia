import React, { useState } from 'react'

import InputText from 'components/InputText'
import InputDescription from 'components/InputDescription'
import Button from 'components/Button'
import Rate from 'components/AnswerRate'
import Modal from 'components/SharedModal'
import Description from 'components/Description'
import InputSelect from 'components/InputSelect'
import dynamic from 'next/dynamic'

import { options } from './company.utils'

const Map = dynamic(() => import('components/Map'), { ssr: false })
const Marker = dynamic(() => import('components/Marker'), { ssr: false })
import * as S from './styles'
import Form from 'components/Form'
import { LeafletMouseEvent } from 'leaflet'
import { useMapEvents } from 'react-leaflet'
import Location from './location'
import { useAuth } from 'hooks/auth'
import { useForm, Controller } from 'react-hook-form'

export default function SignUpForm() {
  const [modalSuccessOpen, setModalSuccessOpen] = useState(true)
  const { user, signIn } = useAuth()
  const { register, control, handleSubmit, watch, errors } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = async (data: any) => {
    // const response = await signIn({
    // email: data.email,
    // password: data.password
    // })
  }

  //@ts-ignore
  const handleOptions = (index, value, parent) => {
    // setValue(`${parent}.channels[${index}].category`, value);
    // clearErrors(`${parent}.channels[${index}].category`);
  }

  return (
    <>
      {/* MODAL  */}
      <Modal
        isOpen={modalSuccessOpen}
        setIsOpen={() => setModalSuccessOpen(!modalSuccessOpen)}
      />
      {/* @ts-ignore */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Description>Localização</Description>
        <S.InputMap>
          <Map marker={true}>
            {/* <Marker
              position={[position.latitude, position.longitude]}
            /> */}
            <Location />
          </Map>
        </S.InputMap>
        <Description>Nome do lugar</Description>
        <InputText
          name="email"
          placeholder="Nome do lugar"
          ref={register({
            required: 'Campo obrigatório'
          })}
        />

        <Description>Tipo do lugar</Description>
        <Controller
          render={({ name, value }) => (
            <InputSelect
              name="quantity"
              placeholder="Tipo do lugar"
              options={options}
              defaultValue={value}
              //@ts-ignore
              onChange={(e) => handleOptions(index, e, parentName)}
            />
          )}
          name="quantity"
          control={control}
          rules={{ required: 'Campo obrigatório' }}
          // defaultValue={
          //   item?.category?.value
          //     ? {
          //         value: item?.category?.value,
          //         label: item?.category?.label,
          //       }
          //     : ''
          // }
        />

        <Description>Quantidade de pessoas</Description>

        <InputText
          type="number"
          name="numero"
          placeholder="Quantidade de pessoas"
          ref={register({
            required: 'Campo obrigatório'
          })}
        />
        <Description>Descrição</Description>
        <Controller
          render={({ name, value }) => (
            <InputDescription name="descrition" placeholder="Observações" />
          )}
          name="descrition"
          control={control}
          rules={{ required: 'Campo obrigatório' }}
          // defaultValue={
          //   item?.category?.value
          //     ? {
          //         value: item?.category?.value,
          //         label: item?.category?.label,
          //       }
          //     : ''
          // }
        />

        <Description>Quantidade de pessoas</Description>
        <Controller
          render={({ name, value }) => <Rate name="quantity" />}
          name="descritisdsdon"
          control={control}
          rules={{ required: 'Campo obrigatório' }}
          // defaultValue={
          //   item?.category?.value
          //     ? {
          //         value: item?.category?.value,
          //         label: item?.category?.label,
          //       }
          //     : ''
          // }
        />

        <Button>CRIAR</Button>

        {/* LOADER */}
        {/* {isLoading && <Loader color='#82288d' />} */}
      </Form>
    </>
  )
}

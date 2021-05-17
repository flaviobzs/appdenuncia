import React, { useState } from 'react'

import InputText from 'components/InputText'
import InputDescription from 'components/InputDescription'
import Button from 'components/Button'
import Rate from 'components/AnswerRate'
import Modal from 'components/SharedModal'
import Description from 'components/Description'
import InputSelect from 'components/InputSelect'
import dynamic from 'next/dynamic'

import { options } from './complaint.utils'

const Map = dynamic(() => import('components/Map'), { ssr: false })
const Marker = dynamic(() => import('components/Marker'), { ssr: false })
import * as S from './styles'
import Form from 'components/Form'
import { LeafletMouseEvent } from 'leaflet'
import { useMapEvents } from 'react-leaflet'
const Location = dynamic(() => import('./location'), { ssr: false })
import { useAuth } from 'hooks/auth'
import { useForm, Controller } from 'react-hook-form'


import { DevTool } from '@hookform/devtools';
import { useFavorite } from 'hooks/location'


export default function SignUpForm() {
  const [modalSuccessOpen, setModalSuccessOpen] = useState(true)
  const { user, signIn } = useAuth()
  // const { location } = useFavorite()

  const { register, control, handleSubmit, watch, errors, setValue, clearErrors } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = async (data: any) => {
    // const response = await signIn({
    // email: data.email,
    // password: data.password
    // })
  }

  // console.log(`fff`, location)

  const handleOptions = (value: any) => {

    console.log(`valeu`,value)
    setValue(`type`, value?.value);
    clearErrors(`type`);
  }

  const handleRateOptions = (value: any) => {

    console.log(`quantity`,value)
    setValue(`quantity`, value);
    clearErrors(`quantity`);
  }

  return (
    <>
      {/* MODAL  */}
      {/* <Modal
        isOpen={modalSuccessOpen}
        setIsOpen={() => setModalSuccessOpen(!modalSuccessOpen)}
      /> */}
            <DevTool control={control} />

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
          name="name"
          placeholder="Nome do lugar"
          ref={register({
            required: 'Campo obrigatório'
          })}
          error={errors.name?.message}
        />

        <Description>Tipo do lugar</Description>
        <Controller
          render={({ name, value }) => (
            <InputSelect
              name={name}
              placeholder="Tipo do lugar"
              options={options}
              defaultValue={value}
              //@ts-ignore
              onChange={(e) => handleOptions(e)}
              error={errors.type?.message}
            />
          )}
          name="type"
          control={control}
          rules={{ required: 'Campo obrigatório' }}
          
        />

        
        <Description>Descrição</Description>
        <Controller
          render={({ name, value }) => (
            <InputDescription name="description" placeholder="Observações" error={errors.description?.message}/>
          )}
          name="description"
          control={control}
          rules={{ required: 'Campo obrigatório' }}         
          
        />

        <Description>Quantidade de pessoas</Description>
        <Controller
        //@ts-ignore
          render={({ name, value }) => <Rate name={name} error={errors.quantity?.message} setValue={(e) => handleRateOptions( e)}/>}
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

        <Button>CRIAR</Button>

        {/* LOADER */}
        {/* {isLoading && <Loader color='#82288d' />} */}
      </Form>
    </>
  )
}

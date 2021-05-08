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

export default function SignUpForm() {
  const [modalSuccessOpen, setModalSuccessOpen] = useState(true)
  // const [position, setPosition] = useState({ latitude: 0, longitude: 0 })

  // function handleMapClick(event: LeafletMouseEvent) {
  //   const { lat, lng } = event.latlng

  //   console.log('dataaa', event)

  //   setPosition({
  //     latitude: lat,
  //     longitude: lng
  //   })
  // }

  return (
    <>
      {/* MODAL  */}
      <Modal
        isOpen={modalSuccessOpen}
        setIsOpen={() => setModalSuccessOpen(!modalSuccessOpen)}
      />

      <Form>
        <Description>Localização</Description>
        <S.InputMap>
          <Map marker={true}>
            {/* <Marker
              position={[position.latitude, position.longitude]}
            /> */}
          </Map>
        </S.InputMap>
        <Description>Nome do lugar</Description>
        <InputText name="email" placeholder="Nome do lugar" />

        <Description>Tipo do lugar</Description>

        <InputSelect
          name="quantity"
          placeholder="Tipo do lugar"
          options={options}
        />

        <Description>Quantidade de pessoas</Description>

        <InputText
          type="number"
          name="numero"
          placeholder="Quantidade de pessoas"
        />
        <Description>Descrição</Description>

        <InputDescription name="descrition" placeholder="Observações" />

        <Description>Quantidade de pessoas</Description>

        <Rate name="quantity" />

        <Button>CRIAR</Button>

        {/* LOADER */}
        {/* {isLoading && <Loader color='#82288d' />} */}
      </Form>
    </>
  )
}

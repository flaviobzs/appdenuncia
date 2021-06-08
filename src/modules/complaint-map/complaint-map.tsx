import React, { useEffect, useState } from 'react'
import * as S from './styles'

import dynamic from 'next/dynamic'
import Card from 'components/Card'
const Map = dynamic(() => import('components/Map'), { ssr: false })
const Marker = dynamic(() => import('components/Marker'), { ssr: false })
// const Popup = dynamic(() => import('components/PopupMarker'), { ssr: false })

const Location = dynamic(() => import('./location'), { ssr: false })

import { mockData } from './complaint.utils'
import api from '../../service/api.service'

// import { complaits } from '../complaint/complaint.mock'
import Link from 'next/link'
import InputSelect from 'components/InputSelect'
import { useAuth } from 'hooks/auth'

export default function ComplaintMap() {
  const { user, signIn } = useAuth()
  const [points, setPoints] = useState<any[]>([])
  const [filter, setFilter] = useState('month')

  console.log(filter)

  useEffect(() => {
    const getPoints = async () => {
      const response = await api.get(`/denuncia?&search=${filter}`)
      if (response.data) {
        console.log(response.data)

        const formatedData = response.data.map((item: any) => {
          return {
            ...item,
            name: item.nome_lugar,
            type: item.tipo_lugar,
            description: item.descricao,
            quantity: item.quantidade_pessoas,
            location: {
              lat: item.latitude,
              lng: item.logintude
            }
          }
        })

        setPoints(formatedData)
      }
    }
    getPoints()
  }, [filter])

  return (
    <S.Wrapper>
      {user ? (
        ''
      ) : (
        <S.LoginLink>
          <Link href="/sign-in">
            <p>Logar</p>
          </Link>
        </S.LoginLink>
      )}
      <S.ContentMap>
        <Map button={user ? true : false}>
          {points.map((data, index) => (
            <Marker
              key={index}
              position={data.location}
              color={String(data.quantity)}
              name={data.name}
            />
          ))}
          <Location />
        </Map>
      </S.ContentMap>
      <S.Section>
        <S.ContentButton>
          <div>
            {user ? (
              <h1>{user.first_name}</h1>
            ) : (
              <Link href="/sign-in">
                <h1>Logar</h1>
              </Link>
            )}
          </div>
        </S.ContentButton>
        <S.ContentInfo>
          <InputSelect
            name="teste"
            placeholder="Todas denuncias"
            options={[
              { label: 'Todas', value: 'month' },
              { label: 'Na semana', value: 'week ' },
              { label: 'Hoje', value: 'today ' }
            ]}
            defaultValue={{ label: 'Todas', value: 'month' }}
            //@ts-ignore
            onChange={(e) => setFilter(e.value)}
            // error={errors.type?.message}
          />

          <br />
          {/* <br /> */}
          {/* <br /> */}

          {points.map((data, index) => (
            <Card
              key={index}
              label={data.name}
              description={data.description}
            />
          ))}
        </S.ContentInfo>
      </S.Section>
    </S.Wrapper>
  )
}

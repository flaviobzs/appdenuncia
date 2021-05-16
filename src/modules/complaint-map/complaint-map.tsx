import React from 'react'
import * as S from './styles'

import dynamic from 'next/dynamic'
import Card from 'components/Card'
const Map = dynamic(() => import('components/Map'), { ssr: false })
const Marker = dynamic(() => import('components/Marker'), { ssr: false })
// const Popup = dynamic(() => import('components/PopupMarker'), { ssr: false })

const Location = dynamic(() => import('./location'), { ssr: false })

import { complaits } from '../complaint/complaint.mock'
import Link from 'next/link'

export default function ComplaintMap() {
  return (
    <S.Wrapper>
      <S.LoginLink>
        <Link href="/sign-in">
          <p>Logar</p>
        </Link>
      </S.LoginLink>
      <S.ContentMap>
        <Map button={true}>
          {/* <Marker /> */}
          <Location />
        </Map>
      </S.ContentMap>
      <S.Section>
        <S.ContentButton>
          <div>
            <Link href="/sign-in">
              <h1>Logar</h1>
            </Link>
          </div>
        </S.ContentButton>
        <S.ContentInfo>
          {complaits.map((data, index) => (
            <Card key={index} label={data.name} />
          ))}
        </S.ContentInfo>
      </S.Section>
    </S.Wrapper>
  )
}

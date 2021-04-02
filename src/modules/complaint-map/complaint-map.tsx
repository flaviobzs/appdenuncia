import React from 'react'
import * as S from './styles'

import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function ComplaintMap() {
  return (
    <S.Wrapper>
      <S.ContentMap>
        <Map />
      </S.ContentMap>
      <S.Section></S.Section>
    </S.Wrapper>
  )
}

import React from 'react'
import * as S from './styles'
import Link from 'next/link'

import ComplaintForm from './company-form'

export default function ComplaintMap() {
  return (
    <S.Wrapper>
      <S.Sidebar>
        <Link href="/">
          <p>Voltar</p>
        </Link>
      </S.Sidebar>
      <S.Content>
        <S.NavBar>
          <Link href="/">
            <p>Voltar</p>
          </Link>
        </S.NavBar>
        <ComplaintForm />
      </S.Content>
    </S.Wrapper>
  )
}

import Link from 'next/link'
import * as S from './styles'

import Logo from 'components/Logo'

type AuthProps = {
  title: string
  children: React.ReactNode
  position?: 'left' | 'right'
}

const Auth = ({ title, children, position = 'right' }: AuthProps) => (
  <S.Wrapper position={position}>
    <S.BannerBlock>
      <S.BannerContent>
        <Link href="/">
          <a>
            <Logo text={false} />
          </a>
        </Link>

        <S.Subtitle>
          <h2>Em tempos dificéis, toda ajuda é importante!</h2>
          <h1>
            <strong>| AppDenúncia |</strong> é o melhor lugar para indicar e
            consultar lugares onde existe aglomerações.
          </h1>
        </S.Subtitle>

        {/* <S.Footer>AppDenúncia 2020 © Todos os Direitos Reservados</S.Footer> */}
        <S.Footer>AppDenúncia 2020 © </S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Link href="/">
          <Logo text={false} color="#000" />
        </Link>
        <h2 color="black">{title}</h2>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth

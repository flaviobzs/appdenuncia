import * as S from './styles'
import Link from 'next/link'

const CreateComplaintButton = () => (
  <Link href="/create">
    <S.Wrapper>
      <S.IconComplaint />
      <S.Text>Denunciar</S.Text>
    </S.Wrapper>
  </Link>
)

export default CreateComplaintButton

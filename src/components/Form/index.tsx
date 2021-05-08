import * as S from './styles'

export type FormProps = {
  children: any
}

const Form: React.FC<FormProps> = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default Form

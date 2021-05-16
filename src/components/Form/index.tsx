import * as S from './styles'

export type FormProps = {
  children: any
}

const Form: React.FC<FormProps> = ({ children, ...props }) => {
  return <S.Wrapper {...props}>{children}</S.Wrapper>
}

export default Form

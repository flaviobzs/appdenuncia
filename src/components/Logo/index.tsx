import * as S from './styles'

export type LogoProps = {
  text?: boolean
  color?: string
}

const Logo: React.FC<LogoProps> = ({ text = true, color = '#fff' }) => (
  <S.Wrapper>
    <S.IconChat fill={color} />
    <S.Name>
      <S.Complaint>
        <S.IconLocation fill={color} />
        <div>
          <S.IconLocation fill={color} />
        </div>
        <S.IconLocation fill={color} />
      </S.Complaint>
      {text && <h3>denuncias</h3>}
    </S.Name>
  </S.Wrapper>
)

export default Logo

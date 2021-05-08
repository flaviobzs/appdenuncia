import * as S from './styles'

export type TagGroupProps = {
  color?: string
  tag?: string
  colorTag?: string
}

const TagGroup: React.FC<TagGroupProps> = ({
  color = 'black',
  tag = '+99',
  colorTag = 'red'
}) => (
  <S.Wrapper>
    <S.IconGroup color={color} />
    <S.Tag colorTag={colorTag}>{tag}</S.Tag>
  </S.Wrapper>
)

export default TagGroup

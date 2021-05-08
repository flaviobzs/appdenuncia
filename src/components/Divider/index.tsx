import React from 'react'
import * as S from './styles'

export type DividerProps = {
  theme?: 'dark' | 'light'
}

const Divider: React.FC<DividerProps> = ({ theme = 'dark' }) => (
  //@ts-ignore
  <S.Wrapper theme={theme} />
)

export default Divider

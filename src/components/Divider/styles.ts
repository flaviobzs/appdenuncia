import styled from 'styled-components'
import { DividerProps } from '.'

export const Wrapper = styled.hr<DividerProps>`
  height: 1px;
  background: ${(props) => (props.theme === 'light' ? '#E3E3E3' : '#82288D')};
  border: 0;
`

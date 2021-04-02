import styled from 'styled-components'
import { ErrorOutline } from '@styled-icons/material'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  align-items: center;
  color: #e84d09;

  div {
    font-size: 12px;
    line-height: 12px;
  }
`

export const Icon = styled(ErrorOutline)`
  fill: #e84d09;
  width: 9px;
  height: 9px;
  margin-right: 5px;
  flex-shrink: 0;
`

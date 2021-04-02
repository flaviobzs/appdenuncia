import styled from 'styled-components'
import { HighlightOff } from '@styled-icons/material'

export const Wrapper = styled.div`
  width: 100%;
  position: relative;

  button {
    position: absolute;
    top: -8px;
    right: -39px;
    border: 0;
    padding: 0;
    background-color: white;

    &:focus {
      outline: 0;
    }
  }
`
export const Content = styled.div`
  width: 100%;
  border: 1px solid #e3e3e3;
  border-radius: 10px 1px 10px 10px;
  padding: 16px;
  z-index: 1;
`

export const Icon = styled(HighlightOff)`
  fill: #919191;
  width: 12px;
  height: 12px;
`

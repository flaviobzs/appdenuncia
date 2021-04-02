import styled from 'styled-components'
import { Info } from '@styled-icons/evaicons-solid'

export const Wrapper = styled.div`
  max-width: 100%;
  position: relative;
  border: 2px solid #c7b40b;
  border-radius: 1px 10px 10px 10px;
  padding: 16px;

  p {
    color: #c7b40b;
  }

  button {
    position: absolute;
    top: -7px;
    left: -7px;
    border: 0;
    padding: 0;
    background-color: white;
    vertical-align: top;

    &:focus {
      outline: 0;
    }
  }
`

export const Icon = styled(Info)`
  fill: #c7b40b;
  width: 20px;
  height: 20px;
`

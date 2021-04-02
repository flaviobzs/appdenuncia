import styled from 'styled-components'
import { ErrorOutline } from '@styled-icons/material'
import { CheckmarkCircle } from '@styled-icons/evaicons-solid'

import { AlertMessageProps } from '.'

const selectColor = (color: string) => {
  switch (color) {
    case 'success':
      return '#029D92'
    case 'error':
      return '#E84D09'
    default:
      return '#c7b40b'
  }
}

export const Wrapper = styled.div<AlertMessageProps>`
  display: flex;
  align-items: center;
  svg {
    fill: ${(props) => selectColor(props.status)};
    width: 20px;
    height: 20px;
  }
  p {
    margin-left: 6px;
    color: ${(props) => selectColor(props.status)};
  }
`

export const Error = styled(ErrorOutline)``

export const Success = styled(CheckmarkCircle)``

export const Alert = styled(ErrorOutline)``

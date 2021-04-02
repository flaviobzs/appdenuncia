import styled, { css } from 'styled-components'
import Select from 'react-select'
import { PlayArrow } from '@styled-icons/material'

import { DropdownProps } from '.'

export const Wrapper = styled(Select)<DropdownProps>`
  margin-bottom: 3px;

  & > div:first-child {
    ${(props) =>
      props.error &&
      css`
        border: solid 1px;
        border-color: #ff7608;
      `};
  }

  && {
    [class*='Menu'] {
      ::-webkit-scrollbar {
        width: 12px;
        height: 122px;
      }
      ::-webkit-scrollbar-track {
        background: #f5f5f5;
      }
      ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        background: #e3e3e3;
      }
      &:hover::-webkit-scrollbar-thumb {
        background: #e3e3e3;
      }
    }
  }
`

export const Icon = styled(PlayArrow)`
  fill: #c4c4c4;
  width: 16px;
  height: 16px;
  transform: rotate(90deg);
`

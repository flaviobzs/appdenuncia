import styled, { css } from 'styled-components'
import ReactSelect from 'react-select'
import { PlayArrow } from '@styled-icons/material'

import { InputSelectProps } from '.'

export const Wrapper = styled(ReactSelect)<InputSelectProps>`
  margin-bottom: 3px;

  .input-select__control {
    color: 'red';
  }

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

import styled, { css } from 'styled-components'
import { HighlightOff } from '@styled-icons/material'

type InputProps = {
  isError: boolean
  withIcon: boolean
}

export const Wrapper = styled.div`
  width: 100%;
`

export const InputWrapper = styled.label<InputProps>`
  display: flex;
  position: relative;
  height: 48px;
  margin-bottom: 3px;

  svg {
    position: absolute;
    right: 8px;
    top: 12px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  &:focus {
    border: 0px;
  }

  > input {
    font-size: 18px;
    width: 100%;
    background-color: #f5f5f5;
    border: 0px;
    border-radius: 4px;
    padding: 16px 35px 14px 12px;
    padding: ${(props) =>
      props.withIcon ? '16px 35px 14px 12px' : '16px 14px '};
    color: #4a4a4a;

    &::placeholder {
      color: #919191;
    }

    &:focus {
      outline: 0px;
    }

    ${(props) =>
      props.isError &&
      css`
        border: 2px solid #ff7608;
      `};
  }
`
export const Icon = styled(HighlightOff)`
  fill: #4a4a4a;
`

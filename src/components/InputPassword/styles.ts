import styled, { css } from 'styled-components'
import { Visibility, VisibilityOff } from '@styled-icons/material-outlined'

type InputProps = {
  isError: boolean
}

export const Wrapper = styled.div`
  width: 100%;
`

export const InputWrapper = styled.label<InputProps>`
  display: flex;
  position: relative;
  height: 48px;
  margin-bottom: 3px;

  &:focus {
    border: 0px;
  }

  > input {
    width: 100%;
    background-color: #f5f5f5;
    border: 0px;
    border-radius: 4px;
    padding: 16px 12px 14px;
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
export const IconOn = styled(Visibility)`
  fill: #4a4a4a;
  position: absolute;
  right: 12px;
  top: 16px;
  width: 11px;
  height: 11px;
  cursor: pointer;
`

export const IconOff = styled(VisibilityOff)`
  fill: #4a4a4a;
  position: absolute;
  right: 12px;
  top: 16px;
  width: 11px;
  height: 11px;
  cursor: pointer;
`

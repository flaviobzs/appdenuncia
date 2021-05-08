import styled, { css } from 'styled-components'
import { Visibility, VisibilityOff } from '@styled-icons/material-outlined'

type InputProps = {
  isError: boolean
}

export const Wrapper = styled.div`
  width: 100%;
`

export const InputWrapper = styled.label<InputProps>`
  ${({ theme, isError }) => css`
    display: flex;
    position: relative;
    margin-bottom: 3px;

    svg {
      position: absolute;
      right: 18px;
      top: 16px;
      width: 20px;
      height: 20px;
      cursor: pointer;

      fill: ${isError && '#ff7608'};
    }

    input {
      font-size: 14px;
      width: 100%;
      height: 46px;
      /* background-color: ${theme.colors.lightGray} */
      background-color: #fafafa;
      border: 1px solid #4a4a4a;
      border-radius: 20px;
      padding: 16px 40px 16px 20px;
      //props.withIcon ? '16px 35px 14px 12px' : '16px 14px '};
      color: #4a4a4a;

      border: ${isError && '2px solid #ff7608'};

      &::placeholder {
        color: #919191;
      }

      &:focus {
        outline: 0px;
      }
    }
  `}
`
export const IconOn = styled(Visibility)`
  fill: #4a4a4a;
  position: absolute;
  right: 12px;
  top: 25px;
  width: 11px;
  height: 11px;
  cursor: pointer;
`

export const IconOff = styled(VisibilityOff)`
  fill: #4a4a4a;
  position: absolute;
  right: 22px;
  top: 25px;
  width: 11px;
  height: 11px;
  cursor: pointer;
`

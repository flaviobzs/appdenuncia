import styled, { css } from 'styled-components'
import { HighlightOff } from '@styled-icons/material'

type InputProps = {
  isError: boolean
  withIcon: boolean
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%
  `}
`

export const Icon = styled(HighlightOff)`
  fill: #4a4a4a;
`

export const InputWrapper = styled.label<InputProps>`
  ${({ theme, isError }) => css`
    display: flex;
    position: relative;
    margin-bottom: 3px;

    svg {
     position: absolute;
     right: 8px;
     top: 12px;
     width: 20px;
     height: 20px;
     cursor: pointer;
   }

    input {
      font-size: 18px;
      width: 100%;
      height: 56px;
      /* background-color: ${theme.colors.lightGray} */
      background-color: #fafafa;
      border: 1px solid #4a4a4a;
      border-radius: 20px;
      padding: 16px 20px;
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

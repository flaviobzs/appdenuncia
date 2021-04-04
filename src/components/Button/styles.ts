import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = Pick<ButtonProps, 'outlined'>

export const Wrapper = styled.button<WrapperProps>`
  height: 56px;
  width: 100%;
  padding: 16px auto;
  text-align: center;
  text-transform: uppercase;
  border-radius: 20px;
  font-weight: 600;
  line-height: 22px;
  background-color: #ff7608;
  color: #ffffff;
  border: 0;
  cursor: pointer;
  box-shadow: 0px 2px 5px #919191;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover {
    box-shadow: 0px 3px 5px 1px #2e2e2e;
  }

  &:active {
    outline: 0px;
  }

  &:focus {
    outline: 0px;
  }

  ${(props) =>
    props.outlined &&
    css`
      background-color: #ffffff;
      border: solid 1px;
      border-color: #ff7608;
      color: #ff7608;
    `};
`

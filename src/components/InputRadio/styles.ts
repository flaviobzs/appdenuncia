import styled, { css } from 'styled-components'

type InputProps = {
  isError: boolean
}

export const Wrapper = styled.label`
  display: flex;
  align-items: center;

  span {
    padding-left: 4px;
    color: #4a4a4a;
    line-height: 1;
    cursor: pointer;
  }
`

export const Input = styled.input<InputProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #82288d;
  border-radius: 50%;
  background: transparent;
  outline: none;
  cursor: pointer;
  margin: 0;

  &:before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #82288d;
    opacity: 0;
    position: absolute;
  }

  &:checked {
    &:before {
      opacity: 1;
    }
  }

  ${(props) =>
    props.isError &&
    css`
      border-color: #ff7608;
    `};
`

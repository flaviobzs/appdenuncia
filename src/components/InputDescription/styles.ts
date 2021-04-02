import styled, { css } from 'styled-components'

type InputProps = {
  isError: boolean
}

export const Wrapper = styled.div`
  width: 100%;
`

export const TextAreaWrapper = styled.textarea<InputProps>`
  display: flex;
  width: 100%;
  position: relative;
  height: 48px;
  margin-bottom: 3px;

  background: #f5f8fa;
  border: 1px solid #d3e2e5;
  border-radius: 20px;
  outline: none;
  color: #5c8599;
  min-height: 120px;
  max-height: 240px;
  resize: vertical;
  padding: 16px;
  line-height: 28px;

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

import styled, { css } from 'styled-components'

type InputProps = {
  isError: boolean
}

export const Wrapper = styled.div`
  width: 100%;
`

export const TextAreaWrapper = styled.textarea<InputProps>`
  ${({ isError }) => css`
    display: flex;
    width: 100%;
    position: relative;
    height: 48px;
    margin-bottom: 3px;

    background: #fafafa;
    border: 1px solid #4a4a4a;
    border-radius: 20px;
    outline: none;
    color: #4a4a4a;
    min-height: 80px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    /* line-height: 28px; */
    font-size: 14px;
    font-family: Poppins;

    border: ${isError && '2px solid #ff7608'};

    &:focus {
      /* border: 0px; */
    }

    input {
      font-size: 15px;
      width: 100%;
      background-color: #fafafa;
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
    }
  `}
`

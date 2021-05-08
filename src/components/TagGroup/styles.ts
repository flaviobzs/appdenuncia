import styled, { css } from 'styled-components'
import { Groups } from '@styled-icons/material-twotone'

type TagGroupProps = {
  color: string
}
type TagProps = {
  colorTag?: string
}

export const IconGroup = styled(Groups)<TagGroupProps>`
  width: 30px;
  height: 30px;
  ${({ color }) => css`
    fill: ${color};
  `}
`

export const Wrapper = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  margin: 0px 8px;
`
export const Tag = styled.span<TagProps>`
  border-radius: 5px;
  color: white;
  font-weight: 500;
  position: absolute;
  font-size: 9px;
  text-align: center;
  padding: 0.3px 0.5px;
  right: 5px;
  height: 10px;
  bottom: 2px;
  min-width: 20px;
  ${({ colorTag }) => css`
    background-color: ${colorTag};
  `}
`

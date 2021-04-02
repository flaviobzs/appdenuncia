import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
import { Help } from '@styled-icons/material'

export const ReactTooltipStyled = styled(ReactTooltip)`
  border-radius: 10px !important;
  padding: 16px !important;
  &.place-left {
    &:after {
      border-left-width: 16px !important;
      right: -12px !important;
      top: calc(50% - 15px) !important;
      margin-top: 0px !important;
      border-top: 16px solid transparent !important;
      border-bottom: 16px solid transparent !important;
    }
  }

  &.place-right {
    &:after {
      border-right-width: 16px !important;
      left: -12px !important;
      top: calc(50% - 15px) !important;
      margin-top: 0px !important;
      border-top: 16px solid transparent !important;
      border-bottom: 16px solid transparent !important;
    }
  }
`

export const Content = styled.div`
  max-width: 160px;
  border-radius: 10px;
  font-size: 16px;
  line-height: 20px;
`

export const Icon = styled(Help)`
  fill: #9d57a5;
  width: 20px;
  height: 20px;
`

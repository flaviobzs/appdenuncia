import Tooltip from 'components/Tooltip'
import React from 'react'
import * as S from './styles'

interface DescriptionProps {
  children: string
  tooltipText?: string
}

const Description: React.FC<DescriptionProps> = ({ children, tooltipText }) => {
  return (
    <S.Wrapper>
      {children}
      {tooltipText && <Tooltip id="1">{tooltipText}</Tooltip>}
    </S.Wrapper>
  )
}

export default Description

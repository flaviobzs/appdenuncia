import React from 'react'
import * as Styles from './styles'

export type CardProps = {
  onClick?: () => void
}

const Card: React.FC<CardProps> = ({ children, onClick }) => (
  <Styles.Wrapper>
    <button data-testid="button-close" 
      onClick={onClick}
    >
      <Styles.Icon />
    </button>
    <Styles.Content>{children}</Styles.Content>
  </Styles.Wrapper>
)

export default Card

import React from 'react'
import * as Styles from './styles'

export type CardProps = {
  label: string
}

const Card: React.FC<CardProps> = ({ label }) => (
  <Styles.Wrapper>
    <Styles.Content>
      <p>{label}</p>
    </Styles.Content>
  </Styles.Wrapper>
)

export default Card

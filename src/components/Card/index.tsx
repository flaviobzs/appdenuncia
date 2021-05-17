import React from 'react'
import * as Styles from './styles'

export type CardProps = {
  label: string
  description: string
}

const Card: React.FC<CardProps> = ({ label, description }) => (
  <Styles.Wrapper>
    <Styles.Content>
      <p>{label}</p>
      <span>{description}</span>
    </Styles.Content>
  </Styles.Wrapper>
)

export default Card

import React from 'react'
import * as Styles from './styles'

const Error: React.FC = ({ children }) => (
  <Styles.Wrapper>
    <Styles.Icon /> <div>{children}</div>
  </Styles.Wrapper>
)

export default Error

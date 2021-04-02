import React from 'react'
import * as Styles from './styles'

const AlertBox: React.FC = ({ children }) => (
  <Styles.Wrapper>
    <button>
      <Styles.Icon />
    </button>
    <p>{children}</p>
  </Styles.Wrapper>
)

export default AlertBox

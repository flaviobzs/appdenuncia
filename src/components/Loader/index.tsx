import React from 'react'
import * as Styles from './styles'
import Loader from 'react-loader-spinner'

const DisplayLoader: React.FC = () => (
  <Styles.Wrapper data-testid="loader">
    <Loader />
  </Styles.Wrapper>
)

export default DisplayLoader

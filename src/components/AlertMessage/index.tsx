import React from 'react'
import * as Styles from './styles'

export type AlertMessageProps = {
  status: 'error' | 'success' | 'alert'
}

const AlertMessage: React.FC<AlertMessageProps> = ({ children, status }) => {
  const selectStatus = (status: string) => {
    switch (status) {
      case 'success':
        return <Styles.Success />
      case 'error':
        return <Styles.Error />
      case 'alert':
        return <Styles.Alert />
      default:
        return null
    }
  }

  return (
    <Styles.Wrapper status={status}>
      {selectStatus(status)}
      <p>{children}</p>
    </Styles.Wrapper>
  )
}
export default AlertMessage

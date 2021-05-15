import React from 'react'

import { AuthProvider } from './auth'
import { FavoriteProvider } from './location'

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <FavoriteProvider>{children}</FavoriteProvider>
    </AuthProvider>
  )
}

export default AppProvider

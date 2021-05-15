import React, { createContext, useState, useContext, useEffect } from 'react'

interface FavoriteContextData {
  location: any
  setLocation: any
}

const FavoriteContext = createContext<FavoriteContextData>(
  {} as FavoriteContextData
)

export const FavoriteProvider: React.FC = ({ children }) => {
  const [location, setLocation] = useState({
    lat: -10.0789132,
    lng: -36.05734200000001
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords

        setLocation({ lat: latitude, lng: longitude })
      },
      (err) => {
        console.error(err)
      },
      {
        timeout: 30000
      }
    )
  }, [])

  return (
    <FavoriteContext.Provider
      value={{
        location,
        setLocation
      }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}

export function useFavorite(): FavoriteContextData {
  const context = useContext(FavoriteContext)

  return context
}

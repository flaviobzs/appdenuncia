import { useFavorite } from 'hooks/location'
import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

const Location = () => {
  const map = useMap()
  const { location } = useFavorite()

  useEffect(() => {
    map.flyTo(location, map.getZoom())
  }, [location])

  return null
}

export default Location

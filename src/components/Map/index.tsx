import { Router } from 'next/dist/client/router'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  MapConsumer,
  useMapEvents
} from 'react-leaflet'
import * as S from './styles'
import { mapView } from './config'
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer'
// CUSTOMIZAR O ICONE DO MARKER !!!!

// import L from 'leaflet'
// const happyMapIcon = L.icon({
//   iconUrl: mapMarkerImg,

// tamanho do icone
//   iconSize: [58, 68],

// posição metade e no final
//   iconAnchor: [29, 68],
//   popupAnchor: [170, 2]
// })

import CreateComplaintButton from '../CreateComplaintButton'
import { useState } from 'react'
import MarkerIcon from 'components/Marker'

export type MapProps = {
  button?: boolean
  children?: any
  marker?: boolean
}

function LocationMarker() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click(e) {
      // map.locate()
      console.log('DADO', e)
      setPosition(e.latlng)
    }
    // locationfound(e) {
    //   setPosition(e.latlng)
    //   map.flyTo(e.latlng, map.getZoom())
    // }
  })

  return position === null ? null : (
    <MarkerIcon position={position}></MarkerIcon>
  )
}

const Map = ({
  button = false,
  children,
  marker = false,
  ...rest
}: MapProps) => (
  <S.MapWrapper>
    <MapContainer
      // agora que é componente, recebe isso
      // center={[-27.2092052,-49.6401092]}
      // zoom={15}
      // style={{ width: '100%', height: '100%' }}
      // dragging={interactive}
      // touchZoom={interactive}
      // zoomControl={interactive}
      // scrollWheelZoom={interactive}
      // doubleClickZoom={interactive}
      // {...props}

      center={mapView.center}
      zoom={mapView.zoom}
      style={{ height: '100%', width: '100%' }}
      minZoom={3}
      maxBounds={[
        [-180, 180],
        [180, -180]
      ]}
      // onclick={onClick}
      // dragging={() => console.log('dddd')}
      {...rest}
    >
      <MapConsumer>
        {(map) => {
          const width =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth

          // indicar o brake point
          if (width < 768) {
            map.setMinZoom(2)
          }

          map.addEventListener('dragend', () => {
            mapView.setView(map.getCenter())
          })
          map.addEventListener('zoomend', () => {
            mapView.setView(map.getCenter(), map.getZoom())
          })

          return null
        }}
      </MapConsumer>

      {/* fazer uma verificação para retornar um tipo */}
      {/* <CustomTileLayer /> */}
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* <ReactLeafletGoogleLayer apiKey={process.env.NEXT_PUBLIC_GOOGLE_API} /> */}

      {/* <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
      /> */}

      {children}
      {/* receber Marker para interar como childrem  */}
      {marker && <LocationMarker />}
    </MapContainer>
    {button && <CreateComplaintButton />}
  </S.MapWrapper>
)

export default Map

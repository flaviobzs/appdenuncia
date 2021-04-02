import { Router } from 'next/dist/client/router'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  MapConsumer
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

const Map = () => (
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

      {/* {children}  */}
      {/* receber Marker para interar como childrem  */}
      <Marker
        // key={}
        // title={}
        eventHandlers={
          {
            // click: () => Router.push(`/${xxx}`)
          }
        }
        position={[0, 0]}
      >
        {/* <Popup
          closeButton={false}
          minWidth={240}
          maxWidth={240}

          edição no css!!!!!

          className="map-popup"
        >
          Lar das meninas
          <a>
            <FiArrowRight size={20} color="#fff" />
          </a>
        </Popup> */}
      </Marker>
    </MapContainer>
    <CreateComplaintButton />
  </S.MapWrapper>
)

export default Map

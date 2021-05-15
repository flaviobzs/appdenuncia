import L from 'leaflet'
import { Marker, Popup } from 'react-leaflet'
import ReactDOMServer from 'react-dom/server'
import Icons from './icon'

type MarkerProps = {
  position: any
  color?: string
}

const MarkerIcon = ({ position, color = 'red', ...props }: MarkerProps) => {
  const icon = L.divIcon({
    className: 'custom-icon',
    html: ReactDOMServer.renderToString(
      <Icons color={color} width="58px" height="68px" />
    ),
    iconSize: [35, 35],
    iconAnchor: [17, 35],
    popupAnchor: [150, -1]
  })

  return (
    <Marker position={position} icon={icon} {...props}>
      <Popup
        closeButton={false}
        minWidth={230}
        maxWidth={230}
        className="map-popup"
      >
        xxxxxx
      </Popup>
    </Marker>
  )
}

export default MarkerIcon

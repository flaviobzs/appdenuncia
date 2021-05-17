import L from 'leaflet'
import { Marker, Popup } from 'react-leaflet'
import ReactDOMServer from 'react-dom/server'
import Icons from './icon'

type MarkerProps = {
  position: any
  color?: string
  name?: string
}

const MarkerIcon = ({ position, color = '', name, ...props }: MarkerProps) => {
  
  const selectColor = (value: any) => {
    switch (value) {
      case '1':
        return 'green'
      case '2':
        return 'blue'
      case '3':
        return 'orange'
      case '4':
        return 'red'
      default:
        return '#1b1c1b'
    }
  }
  
  
  const icon = L.divIcon({
    className: 'custom-icon',
    html: ReactDOMServer.renderToString(
      <Icons color={selectColor(color)} width="58px" height="68px" />
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
        {name}
      </Popup>
    </Marker>
  )
}

export default MarkerIcon

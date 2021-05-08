import { LatLngExpression } from 'leaflet'

export type MapView = {
  center: LatLngExpression
  zoom: number
  setView(center: LatLngExpression, zoom?: number): void
}

export const mapView: MapView = {
  center: [-16.7412211, -49.3511868],
  zoom: 15,
  setView(center: LatLngExpression, zoom?: number) {
    this.center = center
    if (zoom) {
      this.zoom = zoom
    }
  }
}

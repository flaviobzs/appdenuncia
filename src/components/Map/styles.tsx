import styled from 'styled-components'

export const MapWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  .leaflet-container {
    background-color: 'red';
    z-index: 5;
    border-radius: 20px;
  }
`

// popup no mapa
// #page-map .map-popup .leaflet-popup-content-wrapper {
//   background: rgba(255, 255, 255, 0.8);
//   box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
//   border-radius: 20px;
// }

// #page-map .map-popup .leaflet-popup-content {
//   color: #0089A5;
//   font-size: 20px;
//   font-weight: 700;
//   margin: 8px 12px;

//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

// #page-map .map-popup .leaflet-popup-content a {
//   width: 40px;
//   height: 40px;
//   background: #15C3D6;
//   box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
//   border-radius: 12px;

//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// #page-map .map-popup .leaflet-popup-tip-container {
//   top: 50%;
//   left: 0;
// }

// #page-map .map-popup .leaflet-popup-tip {
//   display: none;
// }

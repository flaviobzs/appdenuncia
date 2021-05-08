import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  MapConsumer
} from 'react-leaflet'import React, { useState, useEffect } from 'react'

export type ModalProps = {
  children: any
  isOpen: boolean
  setIsOpen: () => void
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, setIsOpen }) => {
  return (
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
  )
}

export default Modal

import React, { useState, useEffect } from 'react'
//@ts-ignore
import ReactModal from 'react-modal'
import * as S from './styles'

export type ModalProps = {
  children: any
  isOpen: boolean
  setIsOpen: () => void
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen)

  useEffect(() => {
    setModalStatus(isOpen)
  }, [isOpen])

  return (
    <ReactModal
      contentLabel="onRequestClose"
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          maxWidth: '440px',
          border: 'none',
          borderRadius: '8px',
          padding: '48px 25px',
          background: '#ffffff',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          position: 'relative',
          zIndex: 100
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.25)',
          zIndex: 100
        }
      }}
    >
      <S.Close onClick={setIsOpen} />
      <div>{children}</div>
    </ReactModal>
  )
}

export default Modal

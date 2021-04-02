import React from 'react'
import * as Styles from './styles'
import ReactModal from 'react-modal'

export type PopupProps = {
  isOpen: boolean
  setIsClose: () => void
}

const Popup: React.FC<PopupProps> = ({ children, isOpen, setIsClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="onRequestClose"
      onRequestClose={setIsClose}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '10px',
          width: '290px',
          border: 'none',
          padding: '48px 25px',
          background: '#ffffff',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          position: 'relative',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      <Styles.Container>
        <Styles.Close onClick={setIsClose} data-testid="closemodal" />
        {children}
      </Styles.Container>
    </ReactModal>
  )
}

export default Popup

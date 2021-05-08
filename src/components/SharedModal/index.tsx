import Modal from '../Modal'

export type ModalProps = {
  isOpen: boolean
  setIsOpen: () => void
}

const SharedModal: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div>
        <h1>Ops!</h1>
        <h1>Ops!</h1>
        <h1>Ops!</h1>
        <h1>Ops!</h1>
        <h1>Ops!</h1>
        <h1>Ops!</h1>
        <h1>Ops!</h1>
        <h1>Ops!</h1>
        <p>
          Esse endereço de e-mail já está associado a uma conta Indicafix.
          Acesse sua conta ou insira outro endereço de e-mail.
        </p>
      </div>
    </Modal>
  )
}

export default SharedModal

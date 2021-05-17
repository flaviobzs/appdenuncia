import Modal from '../Modal'
import * as S from './styles'

export type ModalProps = {
  isOpen: boolean
  setIsOpen: () => void
}

const SharedModal: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <S.Container>
        <h1>Denuncia registrada!</h1>        
        <p>
          ajude a propagar ainda mais sua denuncias atraves de outras redes sociais:
        </p>
        <S.IconContent>

        <S.FacebookIcon/>
        <S.WhatsappIcon/>
        <S.TwitterIcon/>
        </S.IconContent>
      </S.Container>
    </Modal>
  )
}

export default SharedModal

import Modal from '../Modal'
import * as S from './styles'
import Button from '../Button'
import { useRouter } from 'next/router'
export type ModalProps = {
  isOpen: boolean
  setIsOpen: () => void
}

const SharedModal: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const { push } = useRouter()

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <S.Container>
        <h1>Denuncia registrada!</h1>
        <p>
          ajude a propagar ainda mais sua denuncias atraves de outras redes
          sociais:
        </p>

        <S.IconContent>
          <a
            target="_blank"
            href="https://www.facebook.com/sharer/sharer.php?u=app-denuncia"
          >
            <S.FacebookIcon />
          </a>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?text=app-denuncia"
          >
            <S.WhatsappIcon />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/intent/tweet?url=[app-denuncia]&text=app-denuncia&via=app-denuncia"
          >
            <S.TwitterIcon />
          </a>
        </S.IconContent>

        <S.ButtonContent>
          <Button onClick={() => push('/')}>VOLTAR</Button>
        </S.ButtonContent>
      </S.Container>
    </Modal>
  )
}

export default SharedModal

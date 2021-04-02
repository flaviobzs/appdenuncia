import * as S from './styles'

const goBack = () => console.log('volta')

const Sidebar = () => (
  <S.Wrapper>
    {/* <img src={mapMarkerImg} alt="Happy" /> */}

    <footer>
      <button type="button" onClick={goBack}>
        {/* <FiArrowLeft size={24} color="#FFF" /> */}
      </button>
    </footer>
  </S.Wrapper>
)

export default Sidebar

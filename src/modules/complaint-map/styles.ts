import styled from 'styled-components'
// import media from 'styled-media-query'

export const Wrapper = styled.div`
  /* display: grid; */
  /* grid-template-columns: 1fr; */
  display: flex;
  width: 100vw;
  height: 100vh;
`

export const ContentMap = styled.main`
  /* font-size: 40px; */
  /* width: 100%; */
  flex: 1;
  height: 100vh;
  padding: 30px;
`
export const Section = styled.section`
  /* width: 440px; */
  width: 600px;
  padding: 80px;
  background-image: linear-gradient(to left, #6a11cb 0%, #2575fc 80%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border-top-left-radius: 10%;
  border-bottom-left-radius: 10%; */
`

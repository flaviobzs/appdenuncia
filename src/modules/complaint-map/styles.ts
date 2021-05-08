import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  /* width: 100vw; */
  height: 100vh;
  /* max-height: 100vh; */

  position: relative;
  background-color: #f6f3f1;

  display: flex;
  flex-direction: column;

  ${media.greaterThan('medium')`
  flex-direction: row;
  `}
`

export const LoginLink = styled.div`
  position: absolute;
  background-color: #792b3c;
  padding: 10px;
  z-index: 100;
  right: 30px;

  color: #fff;
  font-size: 18px;

  ${media.greaterThan('medium')`
    display: none;
  `}
`

export const ContentMap = styled.main`
  /* font-size: 40px; */
  /* width: 100%; */
  flex: 1;

  /* max-height: 400px; */
  /* min-height: 400px; */
  /* max-height: min-content; */
  padding: 25px;

  ${media.greaterThan('medium')`
    padding: 30px;
    /* min-height: 100vh; */
    /* max-height: 100vh;   */
  `}
`
export const Section = styled.section`
  width: 100%;
  /* max-height: 100vh; */
  flex: 1;
  padding: 0px 25px;

  ${media.greaterThan('medium')`
    width: 320px;
    flex: none;
    padding: 0px;
  `}

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border-top-left-radius: 10%;
  border-bottom-left-radius: 10%; */
`

export const ContentInfo = styled.div`
  box-shadow: 0px 2px 5px #919191;
  /* background-image: linear-gradient(to left, #6a11cb 0%, #2575fc 80%); */
  /* background-color: #fafafa; */

  /* flex: 1; */
  max-height: 50vh;
  overflow-y: scroll;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 15px;

  ${media.greaterThan('medium')`
  border-top-left-radius: 20px;
  border-top-right-radius: 0px;
  border-left: 1px solid #e8e8e8;
  border-top: 1px solid #e8e8e8;

  max-height: 88vh;
  overflow-y: scroll
  `}
`

export const ContentButton = styled.div`
  display: none;

  ${media.greaterThan('medium')`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
      
  `}

  div {
    background-color: #792b3c;
    color: white;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    width: 100%;
    border-left: 1px solid #e8e8e8;
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;

    height: 56px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    box-shadow: 0px 2px 5px #919191;
    padding: 7px;
  }
`

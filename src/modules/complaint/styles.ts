import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  /* display: grid; */
  /* grid-template-columns: 1fr; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100vw; */
  min-height: 100vh;
  height: 100%;
`

export const Sidebar = styled.div`
  display: none;
  color: white;
  ${media.greaterThan('medium')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 100%;
  min-height: 100vh;
  background-color: #792b3c;
  `};
`

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px;
  background-color: #792b3c;
  color: white;
  ${media.greaterThan('medium')`
  display: none;
  `};
`

export const Content = styled.main`
  /* font-size: 40px; */
  /* padding: 30px; */
  /* margin-left: 200px; */
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 0px;

  gap: 30px;

  ${media.greaterThan('medium')`
    padding-top: 10px;
    gap: 0px;
    justify-content: center;
  `};
`
export const InputMap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 225px;
  border: 1px solid #000000;
  border-radius: 20px;
  margin-bottom: 3px;

  ${media.greaterThan('medium')`
  /* display: none; */
  border: 1px solid #000000;

  `};
`

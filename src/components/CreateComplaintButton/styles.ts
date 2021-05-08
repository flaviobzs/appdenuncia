import styled from 'styled-components'
import { Megaphone } from '@styled-icons/entypo'
import media from 'styled-media-query'

export const Wrapper = styled.a`
  z-index: 10;
  cursor: pointer;
  position: absolute;
  right: 40px;
  bottom: 40px;
  background: #66202d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 50%;

  transition: background-color 0.2s;

  ${media.greaterThan('medium')`
  /* flex-direction: row; */
  padding: 10px;
  border-radius: 20px;

 
  `}
`

export const IconComplaint = styled(Megaphone)`
  fill: #fff;
  width: 30px;
  height: 30px;

  ${media.greaterThan('medium')`

  width: 40px;
  height: 40px;
 
  `}
`

export const Text = styled.h1`
  display: none;
  color: white;

  ${media.greaterThan('medium')`

  display: block;
  margin-left: 8px;
 
  `}
`

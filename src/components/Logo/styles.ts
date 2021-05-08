import styled from 'styled-components'
import { Location, Megaphone } from '@styled-icons/entypo'

export const Wrapper = styled.div`
  max-width: 150px;
  max-height: 130px;
  display: flex;
  z-index: 120;
`

export const Name = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin-top: 19px;
    font-size: 10px;
    text-decoration: none;
    color: #fff;
  }
`

export const Complaint = styled.div`
  display: flex;
  flex-direction: row;

  div {
    padding-top: 5px;
  }
`

export const IconLocation = styled(Location)`
  width: 15px;
  height: 15px;
`

export const IconChat = styled(Megaphone)`
  width: 40px;
  height: 40px;
`

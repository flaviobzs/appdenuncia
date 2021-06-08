import styled, { css } from 'styled-components'
import { Facebook, Whatsapp, Twitter } from '@styled-icons/bootstrap'

export const Container = styled.div``

const iconCSS = css`
  width: 30px;
  height: 30px;
  cursor: pointer;
`

export const IconContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 20px;
  padding-bottom: 20px;

  a {
    text-decoration: none;
    color: #000;
  }
`

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;
`

export const FacebookIcon = styled(Facebook)`
  ${iconCSS}
`
export const WhatsappIcon = styled(Whatsapp)`
  ${iconCSS}
`
export const TwitterIcon = styled(Twitter)`
  ${iconCSS}
`

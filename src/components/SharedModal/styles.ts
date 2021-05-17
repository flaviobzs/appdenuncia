import styled, { css } from 'styled-components'
import { Facebook, Whatsapp, Twitter } from '@styled-icons/bootstrap'

export const Container = styled.div``

const iconCSS = css`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;


export const IconContent = styled.div``


export const FacebookIcon = styled(Facebook)`
   ${iconCSS}

   
`
export const WhatsappIcon = styled(Whatsapp)`
   ${iconCSS}


`
export const TwitterIcon = styled(Twitter)`
   ${iconCSS}


`

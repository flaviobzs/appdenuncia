import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type TemplateProps = {
  position?: 'left' | 'right'
}

export const Wrapper = styled.main<TemplateProps>`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  ${(props) =>
    props.position == 'left' &&
    css`
      grid-template-areas: 'banner content';
    `}

  ${(props) =>
    props.position == 'right' &&
    css`
      grid-template-areas: 'content banner';
    `}

  ${media.lessThan('medium')`
    grid-template-areas: 'content content';    
  `}
`

export const BannerBlock = styled.div`
  position: relative;
  background-image: url(/img/bg-auth.jpg);
  background-size: cover;
  background-position: center center;
  grid-area: banner;
  padding: 20px;

  ${media.lessThan('medium')`
      display: none;
    `}

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #66202d;
    opacity: 0.85;
  }
`

export const BannerContent = styled.div`
  color: #fff;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
  height: 100%;
  position: relative;
  z-index: 0;

  a {
    width: fit-content;
    height: fit-content;
  }
`

export const Subtitle = styled.h3`
  strong {
  }
`

export const Footer = styled.p`
  text-align: center;
  align-self: end;
`

export const Content = styled.div`
  width: 100%;
  grid-area: content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
`

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 15px;
  }
`

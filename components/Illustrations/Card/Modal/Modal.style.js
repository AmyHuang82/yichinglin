import styled, { createGlobalStyle } from 'styled-components'
import { transparentize } from 'polished'
import { media } from 'utils/styleUtils'
import { WHITE, NOBEL_GRAY } from 'constants/colors'
import Cross from 'components/icons/Cross'

export const noScroll = 'no-scroll'

export const GlobalStyle = createGlobalStyle`
  .${noScroll} {
    overflow: hidden;
  }
`

export const Container = styled.div`
  z-index: 1000;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${transparentize(0.3, WHITE)};

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Content = styled.div`
  margin: auto;
  padding: 40px 20px;
  background-color: ${WHITE};
  box-shadow: 0 16px 22px 0 ${transparentize(0.5, NOBEL_GRAY)};
  max-width: 100%;

  ${media.pad} {
    max-width: 90%;
  }
`

export const Image = styled.img`
  max-height: 80vh;
  max-width: 100%;
`

export const Close = styled(Cross).attrs({ color: NOBEL_GRAY })`
  position: absolute;
  top: 0;
  right: 0;
  width: 48px;
  height: 48px;
  margin: 10px;
  cursor: pointer;
`

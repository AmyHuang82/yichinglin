import styled, { createGlobalStyle } from 'styled-components'
import { transparentize } from 'polished'
import { BLACK } from 'constants/colors'

export const noScroll = 'no-scroll'

export const GlobalStyle = createGlobalStyle`
  .${noScroll} {
    overflow: hidden;
  }
`

export const Container = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${transparentize(0.6, BLACK)};

  &::-webkit-scrollbar {
    display: none;
  }
`

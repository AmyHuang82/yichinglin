import styled, { keyframes } from 'styled-components'
import { Masonry as OrigMasonry } from 'masonic'
import { media } from 'utils/styleUtils'
import FlyingBird from 'components/icons/FlyingBird'

export const Masonry = styled(OrigMasonry)`
  :focus {
    outline: none;
  }
`

const flying = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 1; }
`

export const Loading = styled(FlyingBird)`
  width: 50px;
  height: 50px;
  margin: auto;

  path:first-child {
    animation: ${flying} 0.8s steps(1, end) infinite forwards;
  }

  path:last-child {
    opacity: 0;
    animation: ${flying} 0.8s steps(1, end) infinite 0.8s reverse forwards;
  }

  ${media.pad} {
    flex: 1;
  }
`

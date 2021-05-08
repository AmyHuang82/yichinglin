import styled from 'styled-components'
import { transparentize } from 'polished'
import { NOBEL_GRAY } from 'constants/colors'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    > div {
      box-shadow: 0 16px 22px 0 ${transparentize(0.3, NOBEL_GRAY)};
      top: -5px;
    }
  }
`

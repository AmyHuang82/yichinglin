import styled, { css } from 'styled-components'
import { transparentize } from 'polished'
import { media } from 'utils/styleUtils'
import { WHITE, NOBEL_GRAY } from 'constants/colors'
import { DESKTOP_MAX_WIDTH } from 'constants/media'
import { HEADER_HEIGHT, MOBILE_MENU_HEIGHT } from 'constants/size'
import Instagram from '../icons/Instagram'

export const Wrapper = styled.div`
  max-width: ${DESKTOP_MAX_WIDTH}px;
  height: 100%;
  padding: 0 20px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const menuBackground = css`
  background-color: ${transparentize(0.5, WHITE)};
`

export const StyledHeader = styled.header`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  position: fixed;
  top: 0;
  ${menuBackground}
`

export const MenuWrapper = styled.div`
  width: 100%;
  height: ${MOBILE_MENU_HEIGHT}px;
  position: fixed;
  bottom: 0;
  ${menuBackground}

  ${media.pad} {
    max-width: 400px;
    position: relative;
    margin-left: auto;
    background-color: initial;
  }
`

export const Menu = styled.div`
  max-width: 400px;
  padding: 20px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
  letter-spacing: 0.05rem;
  color: ${NOBEL_GRAY};

  ${media.pad} {
    max-width: none;
    width: 100%;
    padding: 0;
    font-size: 1rem;
  }
`

export const IG = styled(Instagram).attrs({ color: NOBEL_GRAY })`
  width: 20px;

  ${media.pad} {
    width: 24px;
  }
`

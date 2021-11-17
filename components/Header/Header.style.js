import { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { transparentize } from 'polished'
import { media } from 'utils/styleUtils'
import { BLACK, WHITE, NOBEL_GRAY } from 'constants/colors'
import { DESKTOP_MAX_WIDTH } from 'constants/media'
import {
  HEADER_PADDING_TOP,
  HEADER_HEIGHT,
  MOBILE_MENU_HEIGHT,
  WRAPPER_SIDES_PADDING,
} from 'constants/size'
import Instagram from '../icons/Instagram'
import OrigPinkoi from '../icons/Pinkoi'

export const Wrapper = styled.div`
  max-width: ${DESKTOP_MAX_WIDTH}px;
  height: 100%;
  padding: 0 ${WRAPPER_SIDES_PADDING}px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const menuBackground = css`
  background-color: ${transparentize(0.2, WHITE)};
`

export const StyledHeader = styled.header`
  z-index: 100;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  padding-top: ${HEADER_PADDING_TOP}px;
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
  height: 100%;
  max-width: 320px;
  padding: 0 ${WRAPPER_SIDES_PADDING}px;
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

const Link = styled.a`
  color: ${({ isLogo, isCurrentPage }) =>
    isLogo || isCurrentPage ? BLACK : NOBEL_GRAY};

  :hover {
    color: ${BLACK};
  }
`

// https://github.com/vercel/next.js/issues/7915#issuecomment-745117649
export const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} {...props}>
    {props.children}
  </Link>
))

export const IconLink = styled.a`
  :hover {
    path {
      fill: ${BLACK};
    }
  }
`

const iconStyle = css`
  width: 20px;

  ${media.pad} {
    width: 24px;
  }
`

export const IG = styled(Instagram).attrs({ color: NOBEL_GRAY })`
  ${iconStyle}
`

export const Pinkoi = styled(OrigPinkoi).attrs({ color: NOBEL_GRAY })`
  ${iconStyle}
`

export const Icons = styled.div`
  display: none;

  ${media.pad} {
    display: flex;
  }

  ${IconLink} + ${IconLink} {
    margin-left: 1.5rem;
  }
`

import styled from 'styled-components'
import { lighten } from 'polished'
import { media } from 'utils/styleUtils'
import { WHITE, BLACK, NOBEL_GRAY, CAMOUFLAGE_GREEN } from 'constants/colors'
import { StyledFooter } from '../Footer/Footer.style'

const MOBILE_SIDE_SPACE = 15
const DESKTOP_SIDE_SPACE = 38
const AVATAR_DESKTOP_WIDTH = 40

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: -${MOBILE_SIDE_SPACE}px;

  ${media.pad} {
    margin-top: 0;
  }
`

export const AvatarWrapper = styled.div`
  width: 100%;
  margin: ${MOBILE_SIDE_SPACE}px;
  background-color: ${WHITE};

  ${media.pad} {
    width: ${AVATAR_DESKTOP_WIDTH}%;
  }
`

export const Avatar = styled.img`
  width: 100%;
`

export const InfoWrapper = styled.div`
  width: 100%;
  padding: 0 ${MOBILE_SIDE_SPACE}px;
  font-size: 1rem;
  line-height: 1.8rem;

  ${media.pad} {
    width: calc(${100 - AVATAR_DESKTOP_WIDTH}% - ${2 * DESKTOP_SIDE_SPACE}px);
    height: 55vh;
    overflow: auto;
    padding: 0 ${DESKTOP_SIDE_SPACE}px ${DESKTOP_SIDE_SPACE}px;
  }
`

export const Intro = styled.div`
  padding-bottom: 35px;
  text-align: center;
  color: ${CAMOUFLAGE_GREEN};
`

export const Description = styled.div`
  div + div {
    margin-top: 10px;
  }

  div:nth-child(3) {
    margin-top: 35px;
  }
`

export const Contact = styled.div`
  padding-top: 35px;
`

Contact.Title = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${CAMOUFLAGE_GREEN};
  margin-bottom: 8px;
`

Contact.Email = styled.a`
  color: ${CAMOUFLAGE_GREEN};
`

Contact.IconLink = styled.a`
  display: flex;
  align-items: center;
  width: fit-content;
  color: ${BLACK};
  letter-spacing: 0;
  font-size: 0.875rem;

  ${media.pad} {
    letter-spacing: 0.05rem;
  }

  :visited {
    color: ${BLACK};
  }

  svg {
    height: 18px;
    width: 18px;
    margin-right: 10px;
  }

  :hover {
    color: ${NOBEL_GRAY};
    path {
      fill: ${NOBEL_GRAY};
    }
  }
`

Contact.Links = styled.div`
  position: relative;
  margin-top: 10px;
  padding-left: 18px;

  ::before {
    content: '';
    position: absolute;
    top: 5px;
    bottom: 5px;
    left: 0;
    width: 5px;
    background: ${lighten(0.3, CAMOUFLAGE_GREEN)};
  }
`

export const Footer = styled(StyledFooter)`
  padding-top: 70px;

  ${media.pad} {
    padding-top: 20px;
  }
`

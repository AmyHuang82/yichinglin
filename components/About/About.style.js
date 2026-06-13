import styled from 'styled-components'
import { lighten } from 'polished'
import { media } from 'utils/styleUtils'
import { WHITE, CAMOUFLAGE_GREEN } from 'constants/colors'
import { HEADER_HEIGHT } from 'constants/size'
import { StyledFooter } from '../Footer/Footer.style'

const MOBILE_SIDE_SPACE = 15
const DESKTOP_SIDE_SPACE = 38
const AVATAR_DESKTOP_WIDTH = 40

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -${MOBILE_SIDE_SPACE}px;

  ${media.pad} {
    margin-top: 0;
    min-height: calc(100vh - ${HEADER_HEIGHT}px - 40px);
  }
`

export const MainContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${media.pad} {
    flex: 1;
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
    padding: 0 ${DESKTOP_SIDE_SPACE}px ${DESKTOP_SIDE_SPACE}px;
  }
`

export const Intro = styled.div`
  padding-block: 10px;
`

export const Title = styled.h3`
  color: ${CAMOUFLAGE_GREEN};
  margin-top: 0;
  margin-bottom: 5px;
`

export const Description = styled.div`
  div + div {
    margin-top: 10px;
  }
`

export const Contact = styled.div`
  padding-bottom: 20px;
`

Contact.Link = styled.a`
  color: ${CAMOUFLAGE_GREEN};
  white-space: nowrap;
  display: inline-block;
`

Contact.Links = styled.div`
  position: relative;
  margin-top: 20px;
  padding-left: 18px;
  line-height: 28px;

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
  width: 100%;
  padding-top: 70px;

  ${media.pad} {
    padding-top: 25px;
  }
`

export const LanguageToggleWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;

  ${media.pad} {
    justify-content: flex-start;
  }
`

export const LanguageToggle = styled.button`
  background: none;
  border: none;
  border-right: 1.5px solid ${CAMOUFLAGE_GREEN};
  border-left: 1.5px solid ${CAMOUFLAGE_GREEN};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  color: ${CAMOUFLAGE_GREEN};
  padding: 0 10px;
  margin: 0;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`

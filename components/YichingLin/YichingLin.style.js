import styled from 'styled-components'
import { media } from 'utils/styleUtils'
import { WHITE, BLACK, NOBEL_GRAY, CAMOUFLAGE_GREEN } from 'constants/colors'

const AVATAR_MARGIN_RIGHT = 50
const AVATAR_DESKTOP_WIDTH = 40

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 100px;
`

export const Avatar = styled.div`
  flex-grow: 0;
  width: 100%;
  padding-bottom: 100%;
  background-color: ${WHITE};
  background-image: url('/avatar.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${media.pad} {
    width: ${AVATAR_DESKTOP_WIDTH}%;
    padding-bottom: ${AVATAR_DESKTOP_WIDTH}%;
    margin-right: ${AVATAR_MARGIN_RIGHT}px;
  }
`

export const InfoWrapper = styled.div`
  width: 100%;
  line-height: 1.75rem;
  font-size: 0.875rem;

  ${media.pad} {
    width: calc(${100 - AVATAR_DESKTOP_WIDTH}% - ${AVATAR_MARGIN_RIGHT}px);
  }
`

export const Intro = styled.div`
  padding: 35px 0;
  text-align: center;
  color: ${CAMOUFLAGE_GREEN};
`

export const Contact = styled.div`
  padding: 35px 0;
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

  :visited {
    color: ${BLACK};
  }

  svg {
    width: 20px;
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
  display: flex;

  ${Contact.IconLink} + ${Contact.IconLink} {
    margin-left: 1.5rem;
  }
`

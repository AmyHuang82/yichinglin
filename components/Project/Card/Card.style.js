import styled from 'styled-components'
import { transparentize } from 'polished'
import { media } from 'utils/styleUtils'
import { DARK_BLACK, NOBEL_GRAY, GALLERY_GRAY } from 'constants/colors'

const MOBILE = {
  WIDTH: 100,
  HEIGHT: 106,
}
const PAD = {
  WIDTH: 49,
  HEIGHT: 51.94,
}
const DESKTOP = {
  WIDTH: 32.5,
  HEIGHT: 34.45,
}

export const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: ${MOBILE.WIDTH}%;
  padding-bottom: ${MOBILE.HEIGHT}%;
  margin-bottom: 17px;

  ${media.pad} {
    width: ${PAD.WIDTH}%;
    padding-bottom: ${PAD.HEIGHT}%;
    margin-bottom: ${100 - PAD.WIDTH * 2}%;

    :nth-child(2n) {
      margin-left: ${100 - PAD.WIDTH * 2}%;
    }
  }

  ${media.desktop} {
    width: ${DESKTOP.WIDTH}%;
    padding-bottom: ${DESKTOP.HEIGHT}%;

    margin-bottom: ${(100 - DESKTOP.WIDTH * 3) / 2}%;

    :nth-child(2n) {
      margin-left: ${(100 - DESKTOP.WIDTH * 3) / 2}%;
      margin-right: ${(100 - DESKTOP.WIDTH * 3) / 2}%;
    }
  }

  :hover {
    top: -3px;
    box-shadow: 0 5px 10px 0 ${transparentize(0.7, NOBEL_GRAY)};
  }
`

export const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  border: 1px solid ${GALLERY_GRAY};
  padding: 30px 20px 10px;
`

export const Img = styled.div`
  width: 100%;
  height: 70%;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
`

export const TitleWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  margin-top: 10px;
  font-weight: 700;
  font-size: 1.25rem;
  color: ${DARK_BLACK};
`

export const Description = styled.div`
  margin-top: 6px;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${NOBEL_GRAY};
`

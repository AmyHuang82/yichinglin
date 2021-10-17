import styled, { css } from 'styled-components'
import { media } from 'utils/styleUtils'
import { NOBEL_GRAY, CAMOUFLAGE_GREEN } from 'constants/colors'

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto 100px;
`

export const Title = styled.h1`
  text-align: center;
  font-size: ${1.25}rem;
  font-weight: 700;
  margin-bottom: 30px;

  ${media.pad} {
    font-size: ${1.5}rem;
  }
`

const figureStyle = css`
  margin: 0 0 30px;

  img {
    width: 100%;
  }

  figcaption {
    color: ${NOBEL_GRAY};
  }
`

export const Figure = styled.figure`
  ${figureStyle}
`

export const Info = styled.div`
  border-left: 6px solid ${CAMOUFLAGE_GREEN};
  margin-bottom: 30px;
`

Info.Content = styled.div`
  margin-left: 25px;
  font-size: 1rem;
  line-height: 1.5rem;

  ${media.pad} {
    font-size: 1.25rem;
    line-height: 2rem;
  }
`

Info.Title = styled.span`
  color: ${CAMOUFLAGE_GREEN};
  font-weight: 700;
  margin-right: 10px;
`

export const HTMLContainer = styled.div`
  p {
    font-size: 1rem;
    line-height: 1.5rem;

    ${media.pad} {
      font-size: 1.25rem;
      line-height: 2rem;
    }
  }

  figure {
    ${figureStyle}
  }
`

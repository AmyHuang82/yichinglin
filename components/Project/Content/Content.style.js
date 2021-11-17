import styled, { css } from 'styled-components'
import { lighten } from 'polished'
import { media } from 'utils/styleUtils'
import { NOBEL_GRAY, CAMOUFLAGE_GREEN } from 'constants/colors'

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto 100px;

  ${media.pad} {
    padding: 0 50px;
  }
`

export const Date = styled.div`
  text-align: center;
  color: ${NOBEL_GRAY};
`

export const Title = styled.h1`
  text-align: center;
  font-size: ${1.25}rem;
  font-weight: 700;
  margin-top: 10px;
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
  position: relative;
  margin: 50px 0;
`

Info.Border = styled.div`
  position: absolute;
  top: 5px;
  bottom: 5px;
  left: 0;
  width: 5px;
  background: ${lighten(0.3, CAMOUFLAGE_GREEN)};
`

Info.Content = styled.div`
  margin-left: 18px;
  font-size: 1rem;
  line-height: 1.5rem;

  ${media.pad} {
    margin-left: 20px;
    font-size: 1.25rem;
    line-height: 2rem;
  }
`

Info.Wrapper = styled.div`
  display: flex;
`

Info.Title = styled.div`
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

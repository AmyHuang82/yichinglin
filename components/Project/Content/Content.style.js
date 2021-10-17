import styled from 'styled-components'
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

export const Figure = styled.figure`
  margin: 0 0 30px;
`

Figure.Img = styled.img`
  width: 100%;
`

Figure.Figcaption = styled.figcaption`
  color: ${NOBEL_GRAY};
`

export const Info = styled.div`
  border-left: 6px solid ${CAMOUFLAGE_GREEN};
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

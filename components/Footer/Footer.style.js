import styled from 'styled-components'
import { media } from 'utils/styleUtils'
import { NOBEL_GRAY } from 'constants/colors'

export const StyledFooter = styled.div`
  font-size: 14px;
  text-align: center;
  margin: auto auto 0;
  padding-top: 20px;
  color: ${NOBEL_GRAY};

  ${media.pad} {
    padding-top: 40px;
    font-size: 12px;
  }
`

export const IconLink = styled.a`
  svg {
    width: 20px;
  }

  :hover {
    path {
      fill: ${NOBEL_GRAY};
    }
  }
`

export const Icons = styled.div`
  ${IconLink} + ${IconLink} {
    margin-left: 1.5rem;
  }
`

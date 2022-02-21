import styled from 'styled-components'
import { media } from 'utils/styleUtils'
import { DESKTOP_MAX_WIDTH } from 'constants/media'
import {
  HEADER_HEIGHT,
  MOBILE_MENU_HEIGHT,
  WRAPPER_SIDES_PADDING,
} from 'constants/size'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  max-width: ${DESKTOP_MAX_WIDTH}px;
  margin-top: ${HEADER_HEIGHT}px;
  margin-bottom: ${MOBILE_MENU_HEIGHT}px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px ${WRAPPER_SIDES_PADDING}px 30px;

  ${media.pad} {
    min-height: calc(100vh - ${HEADER_HEIGHT}px);
    margin-bottom: 0;
    padding-bottom: 20px;
  }
`

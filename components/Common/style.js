import styled from 'styled-components'
import { DESKTOP_MAX_WIDTH } from 'constants/media'
import {
  HEADER_HEIGHT,
  MOBILE_MENU_HEIGHT,
  WRAPPER_SIDES_PADDING,
} from 'constants/size'

export const Container = styled.div`
  width: 100%;
  max-width: ${DESKTOP_MAX_WIDTH}px;
  margin-top: ${HEADER_HEIGHT + 20}px;
  margin-bottom: ${MOBILE_MENU_HEIGHT + 20}px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 ${WRAPPER_SIDES_PADDING}px;
`

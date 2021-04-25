import { MOBILE, PAD, DESKTOP } from 'constants/media'

export const mediaQueryString = {
  mobile: `(min-width: ${MOBILE}px)`,
  pad: `(min-width: ${PAD}px)`,
  desktop: `(min-width: ${DESKTOP}px)`,
}

export const media = {
  mobile: `@media ${mediaQueryString.mobile}`,
  pad: `@media ${mediaQueryString.pad}`,
  desktop: `@media ${mediaQueryString.desktop}`,
}

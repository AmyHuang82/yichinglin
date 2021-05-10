import { INSTAGRAM_LINK, PINKOI_LINK, MAIL_LINK } from 'constants/links'
import IG from '../icons/Instagram'
import Pinkoi from '../icons/Pinkoi'
import Mail from '../icons/Mail'
import { StyledFooter, Icons, IconLink } from './Footer.style'

function Footer() {
  return (
    <StyledFooter>
      <Icons>
        <IconLink target="_blank" rel="noreferrer" href={INSTAGRAM_LINK}>
          <IG />
        </IconLink>
        <IconLink target="_blank" rel="noreferrer" href={PINKOI_LINK}>
          <Pinkoi />
        </IconLink>
        <IconLink href={MAIL_LINK}>
          <Mail />
        </IconLink>
      </Icons>
      &copy; Yiching Lin, All Rights Reserved.
    </StyledFooter>
  )
}

export default Footer

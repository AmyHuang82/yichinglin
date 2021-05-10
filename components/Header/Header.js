import Link from 'next/link'
import {
  BASE_URL,
  PROJECT_URL,
  ABOUT_URL,
  INSTAGRAM_LINK,
  PINKOI_LINK,
} from 'constants/links'
import { ILLUSTRATION_PAGE, PROJECT_PAGE, ABOUT_PAGE } from 'constants/headInfo'
import Logo from '../icons/Logo'
import {
  StyledHeader,
  Wrapper,
  MenuWrapper,
  Menu,
  MenuLink,
  IconLink,
  IG,
  Pinkoi,
} from './Header.style'

function Header({ isIllustration, isProject, isAbout }) {
  return (
    <StyledHeader>
      <Wrapper>
        <Link href={BASE_URL}>
          <MenuLink isLogo>
            <Logo />
          </MenuLink>
        </Link>
        <MenuWrapper>
          <Menu>
            <Link href={BASE_URL}>
              <MenuLink isCurrentPage={isIllustration}>
                {ILLUSTRATION_PAGE}
              </MenuLink>
            </Link>
            <Link href={PROJECT_URL}>
              <MenuLink isCurrentPage={isProject}>{PROJECT_PAGE}</MenuLink>
            </Link>
            <Link href={ABOUT_URL}>
              <MenuLink isCurrentPage={isAbout}>{ABOUT_PAGE}</MenuLink>
            </Link>
            <IconLink target="_blank" rel="noreferrer" href={INSTAGRAM_LINK}>
              <IG />
            </IconLink>
            <IconLink target="_blank" rel="noreferrer" href={PINKOI_LINK}>
              <Pinkoi />
            </IconLink>
          </Menu>
        </MenuWrapper>
      </Wrapper>
    </StyledHeader>
  )
}

export default Header

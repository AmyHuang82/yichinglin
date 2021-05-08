import Link from 'next/link'
import {
  BASE_URL,
  PROJECT_URL,
  ABOUT_URL,
  INSTAGRAM_LINK,
} from 'constants/links'
import Logo from '../icons/Logo'
import {
  StyledHeader,
  Wrapper,
  MenuWrapper,
  Menu,
  MenuLink,
  IconLink,
  IG,
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
              <MenuLink isCurrentPage={isIllustration}>Illustration</MenuLink>
            </Link>
            <Link href={PROJECT_URL}>
              <MenuLink isCurrentPage={isProject}>Project</MenuLink>
            </Link>
            <Link href={ABOUT_URL}>
              <MenuLink isCurrentPage={isAbout}>About</MenuLink>
            </Link>
            <IconLink target="_blank" rel="noreferrer" href={INSTAGRAM_LINK}>
              <IG />
            </IconLink>
          </Menu>
        </MenuWrapper>
      </Wrapper>
    </StyledHeader>
  )
}

export default Header

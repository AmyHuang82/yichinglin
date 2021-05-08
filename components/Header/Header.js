import { INSTAGRAM_LINK } from 'constants/links'
import Logo from '../icons/Logo'
import {
  StyledHeader,
  Wrapper,
  MenuWrapper,
  Menu,
  IconLink,
  IG,
} from './Header.style'

function Header() {
  return (
    <StyledHeader>
      <Wrapper>
        <Logo />
        <MenuWrapper>
          <Menu>
            <div>Illustration</div>
            <div>Project</div>
            <div>About</div>
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

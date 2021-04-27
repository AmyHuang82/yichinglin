import Logo from '../icons/Logo'
import { StyledHeader, Wrapper, MenuWrapper, Menu, IG } from './Header.style'

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
            <IG />
          </Menu>
        </MenuWrapper>
      </Wrapper>
    </StyledHeader>
  )
}

export default Header

import styled, { css } from 'styled-components'
import { transparentize } from 'polished'
import { media } from 'utils/styleUtils'
import { WHITE, NOBEL_GRAY } from 'constants/colors'
import Layout from './Layout'
import Logo from './icons/Logo'
import Instagram from './icons/Instagram'

const menuBackground = css`
  background-color: ${transparentize(0.5, WHITE)};
`

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  ${menuBackground}
`

const MenuWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  ${menuBackground}

  ${media.pad} {
    max-width: 400px;
    position: relative;
    margin-left: auto;
    background-color: initial;
  }
`

const Menu = styled.div`
  max-width: 400px;
  padding: 20px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  color: ${NOBEL_GRAY};

  ${media.pad} {
    max-width: none;
    width: 100%;
    padding: 0;
  }
`

function Header() {
  return (
    <StyledHeader>
      <Layout>
        <Logo />
        <MenuWrapper>
          <Menu>
            <div>Illustration</div>
            <div>Project</div>
            <div>About</div>
            <Instagram color={NOBEL_GRAY} />
          </Menu>
        </MenuWrapper>
      </Layout>
    </StyledHeader>
  )
}

export default Header

import styled, { css } from 'styled-components'
import { transparentize } from 'polished'
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

const Menu = styled.div`
  min-width: 320px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  color: ${NOBEL_GRAY};
`

function Header() {
  return (
    <StyledHeader>
      <Layout>
        <Logo />
        <Menu>
          <div>Illustration</div>
          <div>Project</div>
          <div>About</div>
          <Instagram color={NOBEL_GRAY} />
        </Menu>
      </Layout>
    </StyledHeader>
  )
}

export default Header

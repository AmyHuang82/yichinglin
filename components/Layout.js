import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 1170px;
  height: 100%;
  padding: 0 20px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

function Layout({ children }) {
  return <Wrapper>{children}</Wrapper>
}

export default Layout

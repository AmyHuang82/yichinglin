import styled from 'styled-components'
import { Button } from 'antd'

export const Container = styled.div`
  padding: 30px;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  h2 {
    margin: 0;
  }
`

export const LogoutButton = styled(Button)`
  position: absolute;
  top: 6px;
  right: 20px;
`

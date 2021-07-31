import { useState } from 'react'
import { Menu } from 'antd'
import LoginModal from './LoginModal'
import Illustration from './Illustration/Illustration'

const ILLUSTRATION_KEY = 'illustration'
const PROJECT_KEY = 'project'

function Admin() {
  const [loginUid, setLoginUid] = useState(null)
  const isLogin = loginUid === process.env.NEXT_PUBLIC_VALID_UID

  const [currentKey, setCurrentKey] = useState(ILLUSTRATION_KEY)

  function onMenuItemClick(e) {
    setCurrentKey(e.key)
  }

  if (!isLogin) return <LoginModal setLoginUid={setLoginUid} />
  return (
    <>
      <Menu
        mode="horizontal"
        selectedKeys={[currentKey]}
        onClick={onMenuItemClick}
      >
        <Menu.Item key={ILLUSTRATION_KEY}>Illustration 管理</Menu.Item>
        <Menu.Item key={PROJECT_KEY}>Project 管理</Menu.Item>
      </Menu>
      {currentKey === ILLUSTRATION_KEY && <Illustration />}
      {currentKey === PROJECT_KEY && <div>Project 管理</div>}
    </>
  )
}

export default Admin

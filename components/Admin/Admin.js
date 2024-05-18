import { useState, useEffect } from 'react'
import { Menu } from 'antd'
import firebase from 'firebase/frontend'
import LoginModal from './LoginModal'
import Illustration from './Illustration/Illustration'
import { LogoutButton } from './Admin.style'

const ILLUSTRATION_KEY = 'illustration'
const PROJECT_KEY = 'project'

function Admin() {
  const [isAuthReady, setIsAuthReady] = useState(false)
  const [loginUid, setLoginUid] = useState(null)
  const isLogin = loginUid === process.env.NEXT_PUBLIC_VALID_UID

  const [currentKey, setCurrentKey] = useState(ILLUSTRATION_KEY)

  function onMenuItemClick(e) {
    setCurrentKey(e.key)
  }

  function logout() {
    firebase
      .auth()
      .signOut()
      .then(() => setLoginUid(null))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) setLoginUid(user.uid)
      setIsAuthReady(true)
    })
  }, [])

  if (!isAuthReady) return null
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
      <LogoutButton onClick={logout}>登出</LogoutButton>
      {currentKey === ILLUSTRATION_KEY && <Illustration />}
      {currentKey === PROJECT_KEY && <div>Project 管理</div>}
    </>
  )
}

export default Admin

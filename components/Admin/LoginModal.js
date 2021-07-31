import { useEffect, useState } from 'react'
import { Modal, Button } from 'antd'
import firebase from 'firebase/frontend'

function LoginModal({ setLoginUid }) {
  const [isAuthReady, setIsAuthReady] = useState(false)

  function login() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => setLoginUid(result.user.uid))
      .catch(error => console.login(error))
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) setLoginUid(user.uid)
      setIsAuthReady(true)
    })
  }, [])

  return (
    <Modal
      visible={isAuthReady}
      centered
      closable={false}
      footer={null}
      style={{ textAlign: 'center' }}
    >
      <Button type="primary" size="large" onClick={login}>
        使用 Google 登入
      </Button>
    </Modal>
  )
}

export default LoginModal

import { Modal, Button } from 'antd'
import firebase from 'firebase/frontend'

function LoginModal({ setLoginUid }) {
  function login() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => setLoginUid(result.user.uid))
      .catch(error => window.alert(error))
  }

  return (
    <Modal
      visible
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

import { useState } from 'react'
import LoginModal from './LoginModal'

function Admin() {
  const [loginUid, setLoginUid] = useState(null)
  const isLogin = loginUid === process.env.NEXT_PUBLIC_VALID_UID

  if (!isLogin) return <LoginModal setLoginUid={setLoginUid} />
  return <div>管理者後台</div>
}

export default Admin

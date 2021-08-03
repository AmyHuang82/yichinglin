import Head from 'next/head'
import Admin from 'components/Admin/Admin'
import 'antd/dist/antd.css'

function AdminPage() {
  return (
    <>
      <Head>
        <title>Admin</title>
      </Head>
      <Admin />
    </>
  )
}

export default AdminPage

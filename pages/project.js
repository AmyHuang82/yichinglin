import Head from 'next/head'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import { Container } from 'components/Common/style'
import { BASE_TITLE, PROJECT_PAGE } from 'constants/headInfo'

function Project() {
  return (
    <>
      <Head>
        <title>{`${BASE_TITLE} - ${PROJECT_PAGE}`}</title>
      </Head>
      <Header isProject />
      <Container>
        <div>Project</div>
        <Footer />
      </Container>
    </>
  )
}

export default Project

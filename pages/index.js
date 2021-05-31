import Head from 'next/head'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Illustrations from 'components/Illustrations/Illustrations'
import { Container } from 'components/Common/style'
import { BASE_TITLE, ILLUSTRATION_PAGE } from 'constants/headInfo'

function Home() {
  return (
    <>
      <Head>
        <title>{`${BASE_TITLE} - ${ILLUSTRATION_PAGE}`}</title>
      </Head>
      <Header isIllustration />
      <Container>
        <Illustrations />
        <Footer />
      </Container>
    </>
  )
}

export default Home

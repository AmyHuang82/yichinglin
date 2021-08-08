import Head from 'next/head'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Illustrations from 'components/Illustrations/Illustrations'
import { Container } from 'components/Common/style'
import { BASE_TITLE, DESCRIPTIONS } from 'constants/headInfo'

function HomePage() {
  return (
    <>
      <Head>
        <title>{BASE_TITLE}</title>
        <meta name="description" content={DESCRIPTIONS.ILLUSTRATION_PAGE} />
        <meta property="og:url" content="https://yichinglin.vercel.app" />
        <meta property="og:site_name" content={BASE_TITLE} />
        <meta property="og:title" content={BASE_TITLE} />
        <meta name="og:description" content={DESCRIPTIONS.ILLUSTRATION_PAGE} />
      </Head>
      <Header isIllustration />
      <Container>
        <Illustrations />
        <Footer />
      </Container>
    </>
  )
}

export default HomePage

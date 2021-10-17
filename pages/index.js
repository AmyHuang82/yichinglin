import Head from 'next/head'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Illustrations from 'components/Illustrations/Illustrations'
import { Container } from 'components/Common/style'
import {
  SITE_URL,
  SITE_IMAGE,
  BASE_TITLE,
  DESCRIPTIONS,
} from 'constants/headInfo'

function HomePage() {
  return (
    <>
      <Head>
        <title>{BASE_TITLE}</title>
        <meta name="description" content={DESCRIPTIONS.ILLUSTRATION_PAGE} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content={BASE_TITLE} />
        <meta property="og:title" content={BASE_TITLE} />
        <meta name="og:description" content={DESCRIPTIONS.ILLUSTRATION_PAGE} />
        <meta property="og:image" content={SITE_IMAGE} />
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

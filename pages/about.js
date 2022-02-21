import Head from 'next/head'
import Header from 'components/Header/Header'
import About from 'components/About/About'
import { Container } from 'components/Common/style'
import {
  SITE_URL,
  SITE_IMAGE,
  BASE_TITLE,
  ABOUT_PAGE,
  DESCRIPTIONS,
} from 'constants/headInfo'

function AboutPage() {
  return (
    <>
      <Head>
        <title>{`${BASE_TITLE} - ${ABOUT_PAGE}`}</title>
        <meta name="description" content={DESCRIPTIONS.ABOUT_PAGE} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content={BASE_TITLE} />
        <meta property="og:title" content={BASE_TITLE} />
        <meta name="og:description" content={DESCRIPTIONS.ABOUT_PAGE} />
        <meta property="og:image" content={SITE_IMAGE} />
      </Head>
      <Header isAbout />
      <Container>
        <About />
      </Container>
    </>
  )
}

export default AboutPage

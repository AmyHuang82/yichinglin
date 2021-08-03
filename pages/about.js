import Head from 'next/head'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import About from 'components/About/About'
import { Container } from 'components/Common/style'
import { BASE_TITLE, ABOUT_PAGE } from 'constants/headInfo'

function AboutPage() {
  return (
    <>
      <Head>
        <title>{`${BASE_TITLE} - ${ABOUT_PAGE}`}</title>
      </Head>
      <Header isAbout />
      <Container>
        <About />
        <Footer />
      </Container>
    </>
  )
}

export default AboutPage

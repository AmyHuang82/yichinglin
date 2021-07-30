import Head from 'next/head'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import YichingLin from 'components/YichingLin/YichingLin'
import { Container } from 'components/Common/style'
import { BASE_TITLE, ABOUT_PAGE } from 'constants/headInfo'

function About() {
  return (
    <>
      <Head>
        <title>{`${BASE_TITLE} - ${ABOUT_PAGE}`}</title>
      </Head>
      <Header isAbout />
      <Container>
        <YichingLin />
        <Footer />
      </Container>
    </>
  )
}

export default About

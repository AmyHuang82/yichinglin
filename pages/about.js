import Head from 'next/head'
import Header from 'components/Header/Header'
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
        <div>About</div>
      </Container>
    </>
  )
}

export default About

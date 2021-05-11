import Head from 'next/head'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Illustrations from 'components/Illustrations/Illustrations'
import getIllustrationsInfo from 'lib/getIllustrationsInfo'
import { Container } from 'components/Common/style'
import { BASE_TITLE, ILLUSTRATION_PAGE } from 'constants/headInfo'

export function getStaticProps() {
  const illustrations = getIllustrationsInfo()
  return { props: { illustrations } }
}

function Home({ illustrations }) {
  return (
    <>
      <Head>
        <title>{`${BASE_TITLE} - ${ILLUSTRATION_PAGE}`}</title>
      </Head>
      <Header isIllustration />
      <Container>
        <Illustrations list={illustrations} />
        <Footer />
      </Container>
    </>
  )
}

export default Home

import Head from 'next/head'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Content from 'components/Project/Content/Content'
import { Container } from 'components/Common/style'
import { BASE_TITLE, PROJECT_PAGE } from 'constants/headInfo'
import data from 'components/Project/data'

function AnimalWhisperer() {
  return (
    <>
      <Head>
        <title>{`${BASE_TITLE} - ${PROJECT_PAGE}`}</title>
        <meta name="description" content={data.title} />
        <meta property="og:url" content={data.cover} />
        <meta property="og:site_name" content={BASE_TITLE} />
        <meta property="og:title" content={BASE_TITLE} />
        <meta name="og:description" content={data.title} />
      </Head>
      <Header isProject />
      <Container>
        <Content id="animal_whisperer" />
        <Footer />
      </Container>
    </>
  )
}

export default AnimalWhisperer

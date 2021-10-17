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
        <meta name="description" content={data.subtitle} />
        <meta property="og:url" content="https://yichinglin.vercel.app" />
        <meta property="og:site_name" content={BASE_TITLE} />
        <meta property="og:title" content={data.title} />
        <meta name="og:description" content={data.subtitle} />
        <meta property="og:image" content={data.cover} />
      </Head>
      <Header isProject />
      <Container>
        <Content id={1} />
        <Footer />
      </Container>
    </>
  )
}

export default AnimalWhisperer

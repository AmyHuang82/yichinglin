import Head from 'next/head'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Content from 'components/Project/Content/Content'
import { Container } from 'components/Common/style'
import { SITE_URL, BASE_TITLE, PROJECT_PAGE } from 'constants/headInfo'
import getProjectData from 'components/Project/getProjectData'

function AnimalCommunication() {
  const ID = 'animal_communicator_brand_illustration'
  const { title, description, cover } = getProjectData(ID)

  return (
    <>
      <Head>
        <title>{`${BASE_TITLE} - ${PROJECT_PAGE}`}</title>
        <meta name="description" content={description} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content={BASE_TITLE} />
        <meta property="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta property="og:image" content={cover} />
      </Head>
      <Header isProject />
      <Container>
        <Content id={ID} />
        <Footer />
      </Container>
    </>
  )
}

export default AnimalCommunication

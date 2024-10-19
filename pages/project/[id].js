import Head from 'next/head'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Content from 'components/Project/Content/Content'
import { Container } from 'components/Common/style'
import { SITE_URL, BASE_TITLE, PROJECT_PAGE } from 'constants/headInfo'
import axios from 'utils/axiosUtils'

export async function getStaticPaths() {
  const { data } = await axios.get('/api/projects')
  const paths = data.map(({ id }) => ({
    params: { id },
  }))
  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  const { data } = await axios.get(`/api/projects/${params.id}`)
  return { props: { project: data } }
}

function Project({ project }) {
  const { title, description, cover } = project

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
        <Content project={project} />
        <Footer />
      </Container>
    </>
  )
}

export default Project

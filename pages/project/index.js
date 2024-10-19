import Head from 'next/head'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Project from 'components/Project/Project'
import { Container } from 'components/Common/style'
import {
  SITE_URL,
  SITE_IMAGE,
  BASE_TITLE,
  PROJECT_PAGE,
  DESCRIPTIONS,
} from 'constants/headInfo'
import axios from 'utils/axiosUtils'

export async function getStaticProps() {
  const { data } = await axios.get('/api/projects')
  return { props: { projects: data } }
}

function ProjectPage({ projects }) {
  return (
    <>
      <Head>
        <title>{`${BASE_TITLE} - ${PROJECT_PAGE}`}</title>
        <meta name="description" content={DESCRIPTIONS.PROJECT_PAGE} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content={BASE_TITLE} />
        <meta property="og:title" content={BASE_TITLE} />
        <meta name="og:description" content={DESCRIPTIONS.PROJECT_PAGE} />
        <meta property="og:image" content={SITE_IMAGE} />
      </Head>
      <Header isProject />
      <Container>
        <Project projects={projects} />
        <Footer />
      </Container>
    </>
  )
}

export default ProjectPage

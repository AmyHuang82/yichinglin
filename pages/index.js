import Header from 'components/Header/Header'
import Illustrations from 'components/Illustrations/Illustrations'
import getIllustrationsInfo from 'lib/getIllustrationsInfo'
import { Container } from 'components/Common/style'

export function getStaticProps() {
  const illustrations = getIllustrationsInfo()
  return { props: { illustrations } }
}

function Home({ illustrations }) {
  return (
    <>
      <Header />
      <Container>
        <Illustrations list={illustrations} />
      </Container>
    </>
  )
}

export default Home

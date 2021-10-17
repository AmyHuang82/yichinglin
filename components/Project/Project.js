import { Container } from './Project.style'
import Card from './Card/Card'
import data from './data'

function Project() {
  return (
    <Container>
      {data.map(({ id, title, cover, description }) => (
        <Card
          key={id}
          id={id}
          cover={cover}
          title={title}
          description={description}
        />
      ))}
    </Container>
  )
}

export default Project

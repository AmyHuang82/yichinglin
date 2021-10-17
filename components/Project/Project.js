import { Container } from './Project.style'
import Card from './Card/Card'
import data from './data'

function Project() {
  return (
    <Container>
      {data.map(({ id, title, cover, subtitle }) => (
        <Card
          key={id}
          id={id}
          cover={cover}
          title={title}
          subtitle={subtitle}
        />
      ))}
    </Container>
  )
}

export default Project

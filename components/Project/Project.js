import { Container } from './Project.style'
import Card from './Card/Card'

function Project({ projects }) {
  return (
    <Container>
      {projects
        .sort((a, b) => b.order - a.order)
        .map(({ id, title, cover, description }) => (
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

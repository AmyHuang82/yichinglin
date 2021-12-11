import { getProjects } from 'lib/getProjectData'
import { Container } from './Project.style'
import Card from './Card/Card'

function Project() {
  const data = getProjects()

  return (
    <Container>
      {data
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

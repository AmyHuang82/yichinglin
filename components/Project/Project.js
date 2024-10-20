import useProjects from 'components/api/project/useProjects'
import Loading from 'components/Common/Loading'
import { Container } from './Project.style'
import Card from './Card/Card'

function Project() {
  const { isSuccess, data: projects } = useProjects()

  if (!isSuccess) return <Loading />
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

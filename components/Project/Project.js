import { Container } from './Project.style'
import Card from './Card/Card'

const data = [
  {
    id: 1,
    title: '品牌形象插畫｜動物溝通',
    subtitle: '這個是與別人合作，關於動物溝通的插畫',
    cover: 'https://yichinglin.vercel.app/main_image.jpg',
  },
  {
    id: 1,
    title: '品牌形象插畫｜動物溝通',
    cover: 'https://yichinglin.vercel.app/main_image.jpg',
  },
]

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

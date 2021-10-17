import { Container } from './Project.style'
import Card from './Card/Card'

const data = [
  {
    id: 'animal_whisperer',
    title: '品牌形象插畫｜動物溝通',
    subtitle: '希塔動物溝通 Facebook Cover Photo & Line 選單',
    cover:
      'https://firebasestorage.googleapis.com/v0/b/ching-illustration.appspot.com/o/project%2Fanimal_whisperer%2F%E5%8B%95%E7%89%A9%E6%BA%9D%E9%80%9A_%E9%A6%96%E5%9C%96.jpg?alt=media&token=6bd602db-29af-457b-a6ea-e8d9d9f46d33',
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

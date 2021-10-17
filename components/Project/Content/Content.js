import data from '../data'
import { Container, Title, Figure, Info } from './Content.style'

function Content({ id: currentId }) {
  const { title, contentCover, client } = data.filter(
    ({ id }) => id === currentId
  )[0]

  return (
    <Container>
      <Title>{title}</Title>
      <Figure>
        <Figure.Img src={contentCover.url} />
        <Figure.Figcaption>{contentCover.label} </Figure.Figcaption>
      </Figure>
      <Info>
        <Info.Content>
          <Info.Title>CLIENT</Info.Title>
          {client}
          <br />
          <Info.Title>ILLUSTRATION</Info.Title>
          Yiching Lin
        </Info.Content>
      </Info>
    </Container>
  )
}

export default Content

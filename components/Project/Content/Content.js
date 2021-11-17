import data from '../data'
import {
  Container,
  Date,
  Title,
  Figure,
  Info,
  HTMLContainer,
} from './Content.style'

function Content({ id: currentId }) {
  const { date, title, contentCover, client, html } = data.filter(
    ({ id }) => id === currentId
  )[0]

  return (
    <Container>
      <Date>{date}</Date>
      <Title>{title}</Title>
      <Figure>
        <img alt={contentCover.label} src={contentCover.url} />
        <figcaption>{contentCover.label} </figcaption>
      </Figure>
      <Info>
        <Info.Content>
          <Info.Wrapper>
            <Info.Title>CLIENT</Info.Title>
            {client}
          </Info.Wrapper>
          <Info.Wrapper>
            <Info.Title>ILLUSTRATION</Info.Title>
            Yiching Lin
          </Info.Wrapper>
        </Info.Content>
      </Info>
      <HTMLContainer
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </Container>
  )
}

export default Content

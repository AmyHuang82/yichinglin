import {
  Container,
  Date,
  Title,
  Description,
  Figure,
  Info,
  HTMLContainer,
} from './Content.style'

function Content({
  project: { date, title, description, contentCover, client, html },
}) {
  return (
    <Container>
      <Date>{date}</Date>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Figure>
        <img alt={contentCover.label} src={contentCover.url} />
        <figcaption>{contentCover.label} </figcaption>
      </Figure>
      <Info>
        <Info.Border />
        <Info.Content>
          <Info.Wrapper>
            <Info.Title>CLIENT</Info.Title>
            {client}
          </Info.Wrapper>
          <Info.Wrapper>
            <Info.Title>ILLUSTRATION</Info.Title>
            林以晴 Yiching Lin
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

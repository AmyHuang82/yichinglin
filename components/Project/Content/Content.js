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
  project: { date, title, description, contentCover, collaborators, html },
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
          {collaborators.map(({ label, value }) => (
            <Info.Wrapper key={value}>
              <Info.Title>{label}</Info.Title>
              {value}
            </Info.Wrapper>
          ))}
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

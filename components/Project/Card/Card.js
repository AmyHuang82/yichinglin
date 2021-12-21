import Link from 'next/link'
import { PROJECT_URL } from 'constants/links'
import {
  Wrapper,
  Content,
  Img,
  TitleWrapper,
  Title,
  Description,
} from './Card.style'

function Card({ id, cover, title, description }) {
  return (
    <Link href={`${PROJECT_URL}/${id}`}>
      <Wrapper>
        <Content>
          <Img loading="lazy" url={cover} />
          <TitleWrapper>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </TitleWrapper>
        </Content>
      </Wrapper>
    </Link>
  )
}

export default Card

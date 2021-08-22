import Link from 'next/link'
import { PROJECT_URL } from 'constants/links'
import {
  Wrapper,
  Content,
  Img,
  TitleWrapper,
  Title,
  Subtitle,
} from './Card.style'

function Card({ id, cover, title, subtitle }) {
  return (
    <Link href={`${PROJECT_URL}/${id}`}>
      <Wrapper>
        <Content>
          <Img url={cover} />
          <TitleWrapper>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </TitleWrapper>
        </Content>
      </Wrapper>
    </Link>
  )
}

export default Card

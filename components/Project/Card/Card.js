import Link from 'next/link'
import { PROJECT_URL } from 'constants/links'
import CloudinaryImage from 'components/Common/CloudinaryImage'
import {
  Wrapper,
  Content,
  TitleWrapper,
  Title,
  Description,
} from './Card.style'

function Card({ id, cover, title, description }) {
  return (
    <Link href={`${PROJECT_URL}/${id}`}>
      <Wrapper>
        <Content>
          <CloudinaryImage src={cover} width={370} />
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

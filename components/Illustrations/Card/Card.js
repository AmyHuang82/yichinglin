import Image from 'next/image'
import { Wrapper } from './Card.style'

const MAXIMUM_WIDTH = 370

function Card({ data: { name, src, width, height } }) {
  const calcHeight = MAXIMUM_WIDTH * (height / width)

  return (
    <Wrapper>
      <Image
        key={name}
        src={src}
        alt={name}
        width={MAXIMUM_WIDTH}
        height={calcHeight}
      />
    </Wrapper>
  )
}

export default Card

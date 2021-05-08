import { Masonry } from './Illustration.style'
import Card from './Card/Card'

const MINIMUM_WIDTH = 300

function Illustrations({ list }) {
  return (
    <Masonry
      items={list}
      overscanBy={5}
      columnGutter={15}
      columnWidth={MINIMUM_WIDTH}
      render={Card}
    />
  )
}

export default Illustrations

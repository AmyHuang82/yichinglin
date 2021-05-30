import useIllustration from 'components/api/useIllustration'
import { Masonry } from './Illustration.style'
import Card from './Card/Card'

const MINIMUM_WIDTH = 300

function Illustrations() {
  const { data, isSuccess } = useIllustration()

  if (!isSuccess) return null
  return (
    <Masonry
      items={data}
      columnGutter={15}
      columnWidth={MINIMUM_WIDTH}
      render={Card}
    />
  )
}

export default Illustrations

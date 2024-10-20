import useIllustration from 'components/api/illustration/useIllustration'
import Loading from 'components/Common/Loading'
import { Masonry } from './Illustration.style'
import Card from './Card/Card'

const MINIMUM_WIDTH = 300

function Illustrations() {
  const { data, isSuccess } = useIllustration()

  if (!isSuccess) return <Loading />
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

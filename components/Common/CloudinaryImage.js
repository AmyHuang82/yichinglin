import { Cloudinary } from '@cloudinary/url-gen'
import { Resize } from '@cloudinary/url-gen/actions/resize'
import { AdvancedImage } from '@cloudinary/react'

function CloudinaryImage({ src, alt, width }) {
  const cld = new Cloudinary({ cloud: { cloudName: 'dqi3jgigh' } })
  const img = cld
    .image(decodeURI(src.split('/').pop().split('.').shift()))
    .format('auto')
    .quality('auto')

  if (width) {
    img.resize(Resize.scale().width(width * window.devicePixelRatio))
  }

  return <AdvancedImage loading="lazy" cldImg={img} alt={alt} />
}

export default CloudinaryImage

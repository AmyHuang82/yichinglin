import { Cloudinary } from '@cloudinary/url-gen'
import { Resize } from '@cloudinary/url-gen/actions/resize'
import { AdvancedImage } from '@cloudinary/react'
import getCloudinaryImageName from 'utils/getCloudinaryImageName'

function CloudinaryImage({ src, alt, width }) {
  const cld = new Cloudinary({
    cloud: { cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME },
  })
  const img = cld
    .image(getCloudinaryImageName(src))
    .format('auto')
    .quality('auto')

  if (width) {
    img.resize(Resize.scale().width(width * window.devicePixelRatio))
  }

  return <AdvancedImage loading="lazy" cldImg={img} alt={alt} />
}

export default CloudinaryImage

import fs from 'fs'
import path from 'path'
import sizeOf from 'image-size'

const illustrationsDirectory = path.join(process.cwd(), 'public/illustrations')

function getIllustrationsInfo() {
  const fileNames = fs.readdirSync(illustrationsDirectory)
  const illustrations = fileNames
    .map(fileName => {
      const dimensions = sizeOf(`${illustrationsDirectory}/${fileName}`)

      return {
        name: fileName.split('_')[1],
        src: `/illustrations/${fileName}`,
        width: dimensions.width,
        height: dimensions.height,
      }
    })
    .reverse()

  return illustrations
}

export default getIllustrationsInfo

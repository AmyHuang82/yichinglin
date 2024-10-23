import admin from 'firebase/backend'
import cloudinary from 'cloudinary/config'
import getCloudinaryImageName from 'utils/getCloudinaryImageName'
import { ORDER, DESCRIPTION } from 'constants/updateFields'

const db = admin.firestore()

async function handler(req, res) {
  try {
    if (req.method === 'PATCH') {
      const { updateField } = req.body

      if (updateField === ORDER) {
        const { draggedItem, exchangeTarget } = req.body

        await db
          .collection('illustration')
          .doc(draggedItem.id)
          .update({ order: draggedItem.newOrder })
          .catch(error => {
            res.status(400).json(error)
          })

        await db
          .collection('illustration')
          .doc(exchangeTarget.id)
          .update({ order: exchangeTarget.newOrder })
          .catch(error => {
            res.status(400).json(error)
          })
      }

      if (updateField === DESCRIPTION) {
        const { id } = req.query
        const { description } = req.body

        await db
          .collection('illustration')
          .doc(id)
          .update({ description })
          .catch(error => {
            res.status(400).json(error)
          })

        res.json({ description })
      }

      res.status(200).end()
    }
    if (req.method === 'DELETE') {
      const { id, src } = req.query

      await cloudinary.uploader
        .destroy(getCloudinaryImageName(src))
        .catch(error => {
          res.status(400).json(error)
        })

      await db
        .collection('illustration')
        .doc(id)
        .delete()
        .catch(error => {
          res.status(400).json(error)
        })

      res.status(204).end()
    }
  } catch (error) {
    res.status(400).json(error)
  }
}

export default handler

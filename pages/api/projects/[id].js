import admin from 'firebase/backend'
import { ORDER } from 'constants/updateFields'

const db = admin.firestore()

async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const { id } = req.query
      const snapshot = await db.collection('projects').doc(id).get()
      res.status(200).json(snapshot.data())
    }
    if (req.method === 'PATCH') {
      const { updateField } = req.body

      if (updateField === ORDER) {
        const { draggedItem, exchangeTarget } = req.body

        await db
          .collection('projects')
          .doc(draggedItem.id)
          .update({ order: draggedItem.newOrder })
          .catch(error => {
            res.status(400).json(error)
          })

        await db
          .collection('projects')
          .doc(exchangeTarget.id)
          .update({ order: exchangeTarget.newOrder })
          .catch(error => {
            res.status(400).json(error)
          })
      }

      res.status(200).end()
    }
    if (req.method === 'DELETE') {
      const { id } = req.query

      await db
        .collection('projects')
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

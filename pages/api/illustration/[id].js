import admin from 'firebase/backend'

const db = admin.firestore()
const bucket = admin.storage().bucket()

async function handler(req, res) {
  try {
    if (req.method === 'DELETE') {
      const { id, imageName } = req.query

      await bucket
        .file(`illustration/${imageName}`)
        .delete()
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

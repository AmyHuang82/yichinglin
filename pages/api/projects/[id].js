import admin from 'firebase/backend'

const db = admin.firestore()

async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const { id } = req.query
      const snapshot = await db.collection('projects').doc(id).get()
      res.status(200).json(snapshot.data())
    }
  } catch (error) {
    res.status(400).json(error)
  }
}

export default handler

import admin from 'firebase/backend'

const db = admin.firestore()

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}

async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const snapshot = await db.collection('projects').get()
      if (snapshot.empty) {
        res.status(200).json([])
      } else {
        const data = snapshot.docs.map(doc => {
          const { id, cover, title, description, order } = doc.data()
          return { id, cover, title, description, order }
        })
        res.status(200).json(data)
      }
    }
  } catch (error) {
    res.status(400).json(error)
  }
}

export default handler

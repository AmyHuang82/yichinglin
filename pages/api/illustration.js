import db from 'firebase'

async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const snapshot = await db.collection('illustration').get()
      if (snapshot.empty) {
        res.status(404).end()
      } else {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        res.status(200).json(data)
      }
    }
  } catch (error) {
    res.status(400).json(error)
  }
}

export default handler

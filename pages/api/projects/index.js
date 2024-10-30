import admin from 'firebase/backend'

const db = admin.firestore()

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
    if (req.method === 'POST') {
      const data = req.body
      const snapshot = await db.collection('projects').get()

      if (snapshot.docs.some(doc => data.id === doc.data().id)) {
        return res.status(400).json('網址重複，請重新命名')
      }

      const startOrder =
        snapshot.docs.length > 0
          ? Math.max(...snapshot.docs.map(doc => doc.data().order)) + 1
          : 1

      await db
        .collection('projects')
        .doc(data.id)
        .set({ ...data, order: startOrder + 1 })
      res.status(201).json('succeed')
    }
  } catch (error) {
    res.status(400).json(error)
  }
}

export default handler

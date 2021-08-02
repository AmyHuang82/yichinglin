import formidable from 'formidable'
import { v4 as uuid } from 'uuid'
import admin from 'firebase/backend'
import parseFormObject from 'utils/parseFormObject'
import createFirebaseStorageUrl from 'utils/createFirebaseStorageUrl'

const db = admin.firestore()
const bucket = admin.storage().bucket()

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}

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
    if (req.method === 'POST') {
      const form = formidable({ multiples: true })
      form.parse(req, (error, fields, files) => {
        if (error) res.status(400).json(error)

        const parsedFields = parseFormObject(fields)
        const parsedFiles = parseFormObject(files)

        Object.keys(parsedFields).forEach(async key => {
          const file = parsedFiles[key].imageFile
          const token = uuid()
          const remotePath = `illustration/${file.name}`

          await bucket.upload(file.path, {
            destination: remotePath,
            metadata: {
              cacheControl: 'public, max-age=604800',
              metadata: {
                firebaseStorageDownloadTokens: token,
              },
            },
          })

          parsedFields[key].src = createFirebaseStorageUrl(remotePath, token)
        })

        res.status(201).json({ status: 'success' })
      })
    }
  } catch (error) {
    res.status(400).json(error)
  }
}

export default handler

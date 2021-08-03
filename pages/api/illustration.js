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
        res.status(200).json([])
      } else {
        const data = snapshot.docs.map(doc => ({
          ...doc.data(),
        }))
        res.status(200).json(data)
      }
    }
    if (req.method === 'POST') {
      const form = formidable({ multiples: true })
      form.parse(req, async (error, fields, files) => {
        if (error) res.status(400).json(error)

        const parsedFiles = parseFormObject(files)
        const parsedFields = parseFormObject(fields)
        const uploadInfos = []

        Object.keys(parsedFields).forEach(key => {
          const token = uuid()
          const file = parsedFiles[key].imageFile
          const filePath = file.path
          const remotePath = `illustration/${file.name}`
          uploadInfos.push({
            filePath,
            remotePath,
            token,
          })
          parsedFields[key].src = createFirebaseStorageUrl(remotePath, token)

          const docId = uuid()
          parsedFields[key].id = docId
        })

        await Promise.all(
          uploadInfos.map(info => {
            return bucket.upload(info.filePath, {
              destination: info.remotePath,
              metadata: {
                cacheControl: 'public, max-age=604800',
                metadata: {
                  firebaseStorageDownloadTokens: info.token,
                },
              },
            })
          })
        ).catch(error => {
          res.status(400).json(error)
        })

        await Promise.all(
          Object.values(parsedFields).map(field => {
            return db.collection('illustration').doc(field.id).set(field)
          })
        ).catch(error => {
          res.status(400).json(error)
        })

        res.status(201).json(Object.values(parsedFields))
      })
    }
  } catch (error) {
    res.status(400).json(error)
  }
}

export default handler

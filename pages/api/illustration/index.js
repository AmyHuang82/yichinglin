import formidable from 'formidable'
import { v4 as uuid } from 'uuid'
import admin from 'firebase/backend'
import cloudinary from 'cloudinary/config'
import parseFormObject from 'utils/parseFormObject'

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
      const snapshot = await db.collection('illustration').get()
      const startOrder =
        snapshot?.docs?.length > 0
          ? Math.max(...snapshot.docs.map(doc => doc.data().order)) + 1
          : 1

      const form = formidable({ multiples: true })
      form.parse(req, async (error, fields, files) => {
        if (error) res.status(400).json(error)

        const parsedFiles = parseFormObject(files)
        const parsedFields = parseFormObject(fields)
        const uploadInfos = []

        Object.keys(parsedFields).forEach(key => {
          const file = parsedFiles[key].imageFile
          const filePath = file.path
          const publicId = `${file.name.split('.').shift()}_${uuid()}`
          uploadInfos.push({ key, filePath, publicId })

          const docId = uuid()
          parsedFields[key].id = docId
        })

        await Promise.all(
          uploadInfos.map(info => {
            return cloudinary.uploader
              .upload(info.filePath, {
                asset_folder: 'illustration',
                resource_type: 'image',
                public_id: info.publicId,
              })
              .then(data => {
                parsedFields[info.key].src = data.secure_url
              })
          })
        ).catch(error => {
          res.status(400).json(error)
        })

        await Promise.all(
          Object.values(parsedFields).map((field, index) => {
            const fieldData = {
              ...field,
              order: startOrder + index + 1,
            }
            return db.collection('illustration').doc(field.id).set(fieldData)
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

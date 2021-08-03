function createFirebaseStorageUrl(remotePath, token) {
  return `https://firebasestorage.googleapis.com/v0/b/${
    process.env.FIREBASE_STORAGE_BUCKET
  }/o/${encodeURIComponent(remotePath)}?alt=media&token=${token}`
}

export default createFirebaseStorageUrl

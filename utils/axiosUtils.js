/* eslint-disable no-restricted-imports */
import axios from 'axios'

function getBaseURL() {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000'
  }

  if (
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview' &&
    process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL
  ) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}`
  }

  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  }

  return 'https://yichinglin.vercel.app'
}

export default axios.create({
  baseURL: getBaseURL(),
})

/* eslint-disable no-restricted-imports */
import axios from 'axios'

const IS_DEV = process.env.NODE_ENV === 'development'

export default axios.create({
  baseURL: IS_DEV ? 'http://localhost:3000' : '',
})

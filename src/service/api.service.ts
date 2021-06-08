import axios from 'axios'

// const baseURL = `${process.env.NEXT_PUBLIC_HOST_API}`
const baseURL = 'http://134.209.69.80:8000'

const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default apiClient

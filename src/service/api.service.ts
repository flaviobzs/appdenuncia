import axios from 'axios'

const baseURL = `${process.env.NEXT_PUBLIC_HOST_API}`

const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default apiClient

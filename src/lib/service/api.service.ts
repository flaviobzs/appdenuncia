import axios from 'axios'

const baseURL = 'http://example.com/api'

const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default apiClient

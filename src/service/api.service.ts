import axios from 'axios'
import { parseCookies } from 'nookies'

const cookies = parseCookies()

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}`

const apiClient = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${cookies['social-ocean.token']}`
  }
})

export default apiClient

import axios from 'axios'
import { signOut } from '../contexts/AuthContext'

export const api = axios.create({
  baseURL: 'http://localhost:80',
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      if (error.response.message === 'Unauthenticated.') {
        signOut()
      }
    }

    return Promise.reject(error)
  }
)

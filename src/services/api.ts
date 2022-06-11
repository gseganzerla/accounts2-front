import axios from 'axios'
import Router from 'next/router'
import { destroyCookie } from 'nookies'

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
      destroyCookie(undefined, 'accounts2.isAuthenticated')
      Router.push('/auth/login')
      
      if (error.response.message === 'Unauthenticated.') {
      }
    }

    return Promise.reject(error)
  }
)

import axios from 'axios'
import Router from 'next/router'
import { destroyCookie } from 'nookies'

export const api = axios.create({
  baseURL: 'http://localhost:80',
  withCredentials: true,
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      destroyCookie(undefined, 'accounts2.token')
      destroyCookie(undefined, 'accounts2.uuid')
      // destroyCookie(undefined, 'laravel_session')
      // destroyCookie(undefined, 'XSRF-TOKEN')
      
      Router.push('/auth/login')
    }
  }
)

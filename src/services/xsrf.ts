import { api } from './api'

export async function getXsrfToken() {
  return await api.get('/sanctum/csrf-cookie')
}

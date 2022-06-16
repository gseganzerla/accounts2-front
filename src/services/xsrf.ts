import { api } from './api'

export async function getXsrfToken() {
  return api.get('/sanctum/csrf-cookie')
}

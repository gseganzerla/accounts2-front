import { User } from '../types/userTypes'
import { api } from './api'

export const fetchMe = async () => {
  const response = await api.get('users/me')

  const { user } = response.data

  return user
}

export const updateUser = async (user: User): Promise<User> => {
  const response = await api.put(`users/${user.identify}`, user)

  const { userEdit } = response.data

  return userEdit
}

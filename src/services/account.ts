import { api } from './api'

export type Account = {
  uuid: string
  username: string
  email: string
  account: string
  password?: string
}

export type Accounts = Account[]

export const fetchAccounts = async (): Promise<Accounts> => {
  const response = await api.get('accounts')

  const { accounts } = response.data 

  return accounts
}

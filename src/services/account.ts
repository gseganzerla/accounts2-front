import { api } from './api'

export type Account = {
  uuid: string
  username: string
  email: string
  account: string
  password?: string
}

export type Accounts = Account[]

export type AccountFormData = Omit<Account, 'uuid'>

export const fetchAccounts = async (): Promise<Accounts> => {
  const response = await api.get('accounts')

  const { accounts } = response.data

  return accounts
}

export const storeAccount = async (account: AccountFormData): Promise<Account> => {
  const response = await api.post('accounts', account)

  const { account: storedAccount } = response.data

  return response.data
}

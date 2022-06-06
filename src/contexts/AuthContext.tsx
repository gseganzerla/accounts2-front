import { createContext, ReactNode, useState } from 'react'

interface AuthProviderProps {
  children: ReactNode
}

type User = {
  name: string
  email: string
}

type AuthContextData = {
  signIn: () => Promise<void>
  isAuthenticated: boolean
  user: User
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const isAuthenticated = false

  async function signIn() {}

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}

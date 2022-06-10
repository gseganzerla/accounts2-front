import { useRouter } from 'next/router'
import { parseCookies, setCookie } from 'nookies'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/api'
import { cookieConfig } from '../services/cookie'
import { getXsrfToken } from '../services/xsrf'

interface AuthProviderProps {
  children: ReactNode
}

type User = {
  name: string
  email: string
  uuid: string
}

type AuthContextData = {
  signIn: (credentials: LoginCredentials) => Promise<void>
  isAuthenticated: boolean
  user: User
}

type LoginCredentials = {
  email: string
  password: string
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const isAuthenticated = false
  const router = useRouter()

  useEffect(() => {
    const { 'XSRF-TOKEN': token} = parseCookies()

    if (token) {
      api.get(`/users/me`).then((response) => {
        setUser(response.data.user)
      })
    }
  }, [])

  async function signIn({ email, password }: LoginCredentials) {
    getXsrfToken()

    const response = await api.post('/auth/login', {
      email,
      password,
    })

    const { user } = response.data
    setUser(user)

    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

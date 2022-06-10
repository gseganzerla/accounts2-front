import Router, { useRouter } from 'next/router'
import { destroyCookie, parseCookies } from 'nookies'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/api'
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

export function signOut() {
  destroyCookie(undefined, 'XSRF-TOKEN')
  destroyCookie(undefined, 'laravel_session')
  Router.push('/auth/login')
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const isAuthenticated = false
  const router = useRouter()

  useEffect(() => {
    const { 'XSRF-TOKEN': token } = parseCookies()

    if (token) {
      api.get(`/users/me`).then((response) => {
        setUser(response.data.user)
      })
    }
  }, [])

  async function signIn({ email, password }: LoginCredentials) {
    await getXsrfToken()

    const response = await api.post('/auth/login', {
      email,
      password,
    })

    console.log(response)

    setUser(response.data.user)

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

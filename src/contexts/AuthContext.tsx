import Router, { useRouter } from 'next/router'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/api'
import { cookieConfig } from '../services/cookie'
import { getXsrfToken } from '../services/xsrf'
import { User } from '../types/userTypes'

interface AuthProviderProps {
  children: ReactNode
}

type AuthContextData = {
  signIn: (credentials: LoginCredentials) => Promise<void>
  register: (credentials: RegisterCredentials) => Promise<void>
  user: User
  setUser: Dispatch<SetStateAction<User>>
}

type LoginCredentials = Omit<RegisterCredentials, 'name'>

type RegisterCredentials = {
  email: string
  password: string
  name: string
}

export function signOut() {
  destroyCookie(undefined, 'accounts2.isAuthenticated')
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
    const { 'accounts2.isAuthenticated': isAuthenticated } = parseCookies()

    if (isAuthenticated == 'true') {
      api.get(`/users/me`).then((response) => {
        setUser(response.data.user)
      })
    }
  }, [])

  async function register({ email, password, name }: RegisterCredentials) {
    await getXsrfToken()

    const response = await api.post('/auth/register', {
      email,
      password,
      name,
    })

    setCookie(undefined, 'accounts2.isAuthenticated', 'true', cookieConfig)
    setUser(response.data.user)
    router.push('/')
  }

  async function signIn({ email, password }: LoginCredentials) {
    await getXsrfToken()

    const response = await api.post('/auth/login', {
      email,
      password,
    })

    setCookie(undefined, 'accounts2.isAuthenticated', 'true', cookieConfig)
    setUser(response.data.user)
    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ signIn, register, user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

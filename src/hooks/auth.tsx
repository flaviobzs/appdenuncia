import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect
} from 'react'
import Nookies, { setCookie, parseCookies, destroyCookie } from 'nookies'
import api from '../service/api.service'
import { useRouter } from 'next/router'

interface User {
  id: string
  image: string
  name: string
  email: string
  password: string
  username: string
  bio: string
  phone: string
}

interface SignInCredencials {
  identifier: string
  password: string
}

interface AuthState {
  user: User
  token: string
}

interface AuthContextData {
  user: any
  signIn(credencials: SignInCredencials): Promise<void>
  signUp(credencials: any): Promise<void>
  signOut(): void
  setUser: any
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>()
  const { push } = useRouter()

  useEffect(() => {
    const user = localStorage.getItem('social-ocean:user')

    if (user) {
      setUser(JSON.parse(user))
    }
  }, [])

  const signIn = useCallback(async ({ identifier, password }) => {
    const response = await api.post('auth/signin', {
      identifier,
      password
    })
    const { user, jwt } = response.data

    console.log('dataddd', response.data)

    setCookie(undefined, 'social-ocean.token', jwt, {
      maxAge: 60 * 60 * 24 * 30,
      path: '/'
    })

    localStorage.setItem('social-ocean:user', JSON.stringify(user))
    localStorage.setItem('social-ocean:token', JSON.stringify(jwt))

    setUser(user)

    api.defaults.headers['Authorization'] = `Bearer ${jwt}`

    // redirect
    push('/favorites')
  }, [])

  const signOut = () => {
    // destroyCookie(undefined, 'social-ocean.token')
    Nookies.destroy(undefined, 'social-ocean.token')
    // Cookies.remove('social-ocean.token')
    localStorage.removeItem('social-ocean:user')
    localStorage.removeItem('social-ocean:token')
    // redirect
    push('/')
  }

  const signUp = useCallback(async (data) => {
    const response = await api.post('auth/signup', data)
    const { user, jwt } = response.data

    setCookie(undefined, 'social-ocean.token', jwt, {
      maxAge: 60 * 60 * 24 * 30,
      path: '/'
    })

    localStorage.setItem('social-ocean:user', JSON.stringify(user))
    localStorage.setItem('social-ocean:token', JSON.stringify(jwt))

    setUser(user)

    api.defaults.headers['Authorization'] = `Bearer ${jwt}`

    // redirect
    push('/favorites')
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signUp,
        signOut,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  return context
}

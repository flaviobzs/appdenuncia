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
  email: string
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
    const user = localStorage.getItem('app-denuncia:user')

    if (user) {
      setUser(JSON.parse(user))
    }
  }, [])

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('auth/signin', {
      email,
      password
    })
    const { user, jwt } = response.data


    setCookie(undefined, 'app-denuncia.token', jwt, {
      maxAge: 60 * 60 * 24 * 30,
      path: '/'
    })

    localStorage.setItem('app-denuncia:user', JSON.stringify(user))
    localStorage.setItem('app-denuncia:token', JSON.stringify(jwt))

    setUser(user)

    api.defaults.headers['Authorization'] = `Bearer ${jwt}`

    // redirect
    push('/')
  }, [])

  const signOut = () => {
    // destroyCookie(undefined, 'app-denuncia.token')
    Nookies.destroy(undefined, 'app-denuncia.token')
    // Cookies.remove('app-denuncia.token')
    localStorage.removeItem('app-denuncia:user')
    localStorage.removeItem('app-denuncia:token')
    // redirect
    push('/')
  }

  const signUp = useCallback(async (data) => {
    const response = await api.post('auth/signup', data)
    const { user, jwt } = response.data

    setCookie(undefined, 'app-denuncia.token', jwt, {
      maxAge: 60 * 60 * 24 * 30,
      path: '/'
    })

    localStorage.setItem('app-denuncia:user', JSON.stringify(user))
    localStorage.setItem('app-denuncia:token', JSON.stringify(jwt))

    setUser(user)

    api.defaults.headers['Authorization'] = `Bearer ${jwt}`

    // redirect
    push('/')
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

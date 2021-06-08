import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect
} from 'react'
import Nookies, { setCookie } from 'nookies'
import api from '../service/api.service'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

interface User {
  id: string
  name: string
  email: string
}

interface SignInCredencials {
  username: string
  password: string
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

  const signIn = useCallback(async ({ username, password }) => {
    try {
      const response = await api.post('/sign-in/', {
        username,
        password
      })

      setCookie(undefined, 'app-denuncia.token', response.data, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      })
      localStorage.setItem('app-denuncia:user', JSON.stringify(response.data))
      setUser(response.data)

      api.defaults.headers['Authorization'] = `Bearer ${response.data.jwt}`
      push('/')
    } catch (e) {
      toast.error('Falha ao fazer login', {
        style: {
          background: '#F2CBBA',
          color: '#4A4A4A',
          padding: '14px',
          fontSize: '12px'
        },
        duration: 3000
      })
    }
  }, [])

  const signOut = () => {
    Nookies.destroy(undefined, 'app-denuncia.token')
    localStorage.removeItem('app-denuncia:token')
    push('/')
  }

  const signUp = useCallback(async (data) => {
    try {
      const response = await api.post('/sign-up/', data)

      setCookie(undefined, 'app-denuncia.token', response.data, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      })

      localStorage.setItem('app-denuncia:user', JSON.stringify(response.data))

      setUser(user)

      api.defaults.headers['Authorization'] = `Bearer ${response.data.jwt}`

      push('/')
    } catch (e) {
      toast.error('Falha ao cadastrar', {
        style: {
          background: '#F2CBBA',
          color: '#4A4A4A',
          padding: '14px',
          fontSize: '12px'
        },
        duration: 3000
      })
    }
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

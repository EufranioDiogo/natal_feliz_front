import React, { useEffect, useState } from 'react'
import { isAuthenticatedRemoteService, loginRemoteService } from '../services/remotes/http/auth/authRemoteService'

export const AuthContext = React.createContext({
  user: {},
  isLogged: false,
  login: async (username, password) => {},
  logout: async () => {}
})
function AuthController({ children }) {
  const [user, setUser] = useState({})
  const [isLogged, setIsLogged] = useState(false)

  const verifyLoginState = async () => {
    const token = localStorage.getItem('natal_feliz_token')

    if (token) {
      const response = await isAuthenticatedRemoteService(token)

      if (response.result) {
        setUser(response.data.userFounded)
        setIsLogged(true)
      }
    }
  }

  const login = async (username, password) => {
    const response = await loginRemoteService(username, password)

    if (response.result) {
      setUser(response.data.userFounded)
      setIsLogged(true)
      localStorage.setItem('natal_feliz_token', response.data.token)
    }
  }

  const logout = async () => {
    setUser({})
    setIsLogged(false)
    localStorage.removeItem('natal_feliz_token')
  }

  useEffect(() => {
    verifyLoginState()
  }, [])

  return (
    <AuthContext.Provider value={
      {
        user,
        isLogged,
        login,
        logout
      }
    }>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthController

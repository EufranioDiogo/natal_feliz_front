import React, { useEffect, useState } from 'react'
import { isAuthenticatedRemoteService, loginRemoteService } from '../services/remotes/http/auth/authRemoteService'
import { createUserRemoteService } from '../services/remotes/http/user/userRemoteService'

export const AuthContext = React.createContext({
  user: {},
  isLogged: false,
  login: async (username, password) => {},
  logout: async () => {},
  signup: async (username, password) => {}
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

  const signup = async (username, password) => {
    const response = await createUserRemoteService(username, password)

    if (response.result) {
      setUser(response.data.data)
      setIsLogged(true)
      localStorage.setItem('natal_feliz_token', response.data.token)
    }
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
        logout,
        signup
      }
    }>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthController

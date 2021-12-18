import React, { useContext, useEffect } from 'react'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import { AuthContext } from '../controller/AuthController'
import AppNavigation from './AppNavigation'
import InitialNavigation from './InitialNavigation'


function MainNavigator() {
  const { isLogged } = useContext(AuthContext)

  useEffect(() => {
    return () => {

    }
  }, [])

  return (
    <BrowserRouter>
      {
        !isLogged ?
          <InitialNavigation />
          :
          <AppNavigation />
      }
    </BrowserRouter>
  )
}

export default MainNavigator
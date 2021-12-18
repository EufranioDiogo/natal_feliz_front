import React, { useContext, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthContext } from '../controller/AuthController'
import AppNavigation from './AppNavigation'
import InitialNavigation from './InitialNavigation'


function MainNavigator() {
  const { isLogged } = useContext(AuthContext)

  useEffect(() => {
    if (isLogged) {
      console.log('Entrou')
    }
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
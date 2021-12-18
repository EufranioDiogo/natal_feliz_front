import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/auth_page/login/LoginPage'
import SignupPage from '../pages/auth_page/signup/SignupPage'
import StarterPage from '../pages/starter_page/StarterPage'

function InitialNavigation() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<StarterPage></StarterPage>} />
        <Route path="auth">
          <Route path="signup" element={<SignupPage></SignupPage>} />
          <Route path="login" element={<LoginPage></LoginPage>} />
        </Route>
      </Route>
    </Routes>
  )
}

export default InitialNavigation

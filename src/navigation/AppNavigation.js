import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HiddenFriendPage from '../pages/normal_app_page/hidden_friend/HiddenFriendPage'
import HiddenFriendDesires from '../pages/normal_app_page/hidden_friend/pages/HiddenFriendDesires'
import HomePage from '../pages/normal_app_page/home/HomePage'
import ProfilePage from '../pages/normal_app_page/profile/ProfilePage'

function AppNavigation() {
  return (
    <Routes>
      <Route path="/app">
        <Route index element={<HomePage></HomePage>} />
        <Route path="friend">
          <Route path="hidden">
            <Route index element={<HiddenFriendPage></HiddenFriendPage>} />
            <Route path=":userid" element={<HiddenFriendDesires></HiddenFriendDesires>} />
          </Route>
        </Route>
        <Route path="profile" element={<ProfilePage />} />
      </Route>

      <Route path="*" element={<HomePage></HomePage>}></Route>

    </Routes>
  )
}

export default AppNavigation

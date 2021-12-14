import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react';
import StarterPage from './pages/starter_page/StarterPage';
import SignupPage from './pages/auth_page/signup/SignupPage';
import LoginPage from './pages/auth_page/login/LoginPage';
import HiddenFriendPage from './pages/normal_app_page/hidden_friend/HiddenFriendPage';
import HiddenFriendDesires from './pages/normal_app_page/hidden_friend/pages/HiddenFriendDesires';

function App() {
  const isLogged = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<StarterPage></StarterPage>} />
          <Route path="auth">
            <Route path="signup" element={<SignupPage></SignupPage>} />
            <Route path="login" element={<LoginPage></LoginPage>} />
          </Route>
          <Route path="app">
            <Route path="home" element={<LoginPage></LoginPage>} />

            <Route path="friend">
              <Route path="hidden">
                <Route index element={<HiddenFriendPage></HiddenFriendPage>} />
                <Route path=":userid" element={<HiddenFriendDesires></HiddenFriendDesires>} />

              </Route>
            </Route>

            <Route path="profile" element={<LoginPage></LoginPage>} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>


  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react';
import StarterPage from './pages/starter_page/StarterPage';
import SignupPage from './pages/auth_page/signup/SignupPage';
import LoginPage from './pages/auth_page/login/LoginPage';
import HiddenFriendPage from './pages/normal_app_page/hidden_friend/HiddenFriendPage';
import HiddenFriendDesires from './pages/normal_app_page/hidden_friend/pages/HiddenFriendDesires';
import HomePage from './pages/normal_app_page/home/HomePage';
import ProfilePage from './pages/normal_app_page/profile/ProfilePage';
import InitialNavigation from './navigation/InitialNavigation';
import AppNavigation from './navigation/AppNavigation';

function App() {
  const isLogged = false;
  return (
    <BrowserRouter>
      {
        !isLogged ?
          <InitialNavigation />
          :
          <AppNavigation />
      }
    </BrowserRouter>


  );
}

export default App;

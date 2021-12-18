import './App.css';
import React from 'react';
import MainNavigator from './navigation/MainNavigator';
import AuthController from './controller/AuthController';

function App() {
  return (
    <AuthController>
      <MainNavigator />
    </AuthController>
  );
}

export default App;

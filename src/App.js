import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react';
import StarterPage from './pages/starter_page/StarterPage';

function App() {
  const isLogged = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<StarterPage></StarterPage>} />
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;

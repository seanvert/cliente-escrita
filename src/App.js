import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './layouts/Main.tsx';
import Home from './pages/Home.tsx';
import Escrita from './pages/Escrita.tsx';
import Trilha from './pages/Trilha.tsx';
import Login from './pages/Login.tsx';
import NaoEncontrado from './pages/NaoEncontrado.tsx';
import SignUp from './pages/SignUp.tsx';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="escrita" element={<Escrita />} />
            <Route path="trilha" element={<Trilha />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="*" element={<NaoEncontrado />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

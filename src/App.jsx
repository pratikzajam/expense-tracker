import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/ui/button'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import Confirmemail from './Pages/Confirm-email.jsx'
import Page from './app/dashboard/page'
import LandingPage from './Pages/Landingpage'
import { Route,Routes } from 'react-router'

function App() {


  return (

    <Routes>
     <Route  path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/confirmemail" element={<Confirmemail />} />
      <Route path="/dashboard" element={<Page />} />
      <Route path="/confirmemail" element={<Confirmemail />} />
    </Routes>

  )
}

export default App

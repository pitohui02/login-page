import LoginPage from './pages/loginPage.js'
import React from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import RegistrationPage from './pages/registrationPage.js'
import Dashboard from './pages/dashboard.js'



function App() {
  return (
    <div className = "App">
      <Routes>
      
      <Route path='/' Component={LoginPage} />

      <Route path='registration' Component={RegistrationPage} />

      <Route path = 'dashboard' Component={Dashboard} />
      

      </Routes>
    </div>
  )
}

export default App;

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/register-login-form' element={<LoginForm />} />
        <Route exact path='/register' element={<RegisterForm />} />
      </Routes>
      
    </div>
  )
}

export default App
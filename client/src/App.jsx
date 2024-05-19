
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Settings from './pages/Account'
import Account from './pages/Account'
import { useState } from 'react'
import Sidebar from './components/Sidebar'

function App() {
  
  return (
    <>
      <Sidebar />
      <Account />
    </>
  )
}

export default App

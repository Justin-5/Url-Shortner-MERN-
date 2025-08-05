import React from 'react'
import LoginForm from './components/LoginForm'
import HomePage from './pages/Homepage'
import AuthPage from './pages/AuthPage'
import { Outlet } from '@tanstack/react-router'
import Navbar from './components/NavBar'

const RootLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}
export default RootLayout
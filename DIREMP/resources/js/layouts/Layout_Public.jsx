// Bibliotecas
import React from 'react'
import {Outlet} from 'react-router-dom'

// Componentes
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Layout_Public = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout_Public

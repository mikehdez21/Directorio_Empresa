// Bibliotecas
import React, { useEffect } from 'react'
import {Outlet} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// Componentes
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Archivo de Configuración
import AuthUser from '../pageAuth/AuthUser';


const Layout_Admin = () => {
  const {getRol} = AuthUser()
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(getRol() != "admin"){
      navigate('/')
    }
  },[])

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout_Admin

// Bibliotecas
import React, { useEffect } from 'react'
import {Outlet} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// Componentes
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Archivo de Configuración
import AuthUser from '../pageAuth/AuthUser';


const Layout_Cliente = () => {
  const {getRol} = AuthUser()
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(getRol() != "cliente"){
      navigate('/')
    }
  },[])


  return (
    <>
    <h1>Clientes</h1>

      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout_Cliente

import React from 'react'
import AuthUser from '../pageAuth/AuthUser'
import Config from '../Config'

function Navbar() {
  const {getToken, getLogout, getRol} = AuthUser()

  const logoutUser = () =>{
    Config.getLogout('/logout')
    .then(response=>{
      console.log(response)
      getLogout();
    }).catch(error => {
      console.error(error);
    })

  }
  
  const renderLinks = () =>{
    if(getToken()){   
      return(
        <>
        <li className="nav-item">
          <a className="nav-link" href={`/${getRol()}`}>Administracion</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href='#' onClick={logoutUser}>Logout</a>
        </li>
        </>
      )
    }else{
      return(
        <>
        <li className="nav-item">
          <a className="nav-link" href='/login'>Login</a>
        </li>
        </>
      )
    }
  }

  return (

    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">DIREMP</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/categorias">Categorias</a>
            </li>



          </ul>

          <ul className="navbar-nav ms-auto">
            {renderLinks()}
          </ul>

          

        </div>

      </div>
    </nav>
  )
}

export default Navbar

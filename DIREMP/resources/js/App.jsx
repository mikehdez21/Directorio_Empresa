// Bibliotecas
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import Layout_Public from './layouts/Layout_Public';
import Layout_Admin from './layouts/Layout_Admin';
import Layout_Cliente from './layouts/Layout_Cliente';

// Pages
// -- Public
import PageHome from './pagesPublic/PageHome';

// -- Admin
import PanelAdmin from './pagesAdmin/PanelAdmin';

import UserAll from './pagesAdmin/UserAll';
import UserUpdate from './pagesAdmin/UserUpdate';

import CategoriaAll from './pagesAdmin/CategoriaAll';
import CategoriaStore from './pagesAdmin/CategoriaStore';
import CategoriaUpdate from './pagesAdmin/CategoriaUpdate';

// -- Cliente
import PanelCliente from './pagesCliente/PanelCliente';


// Componentes Auth
import ProtectedRoutes from './pageAuth/ProtectedRoutes'; // pageAuth
import Login from './pageAuth/Login'; // pageAuth
import Register from './pageAuth/Register'; // pageAuth

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Layout_Public/>}>
          <Route index element={<PageHome/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>

        </Route>

        <Route element={<ProtectedRoutes/>}>
          <Route path="/admin" element={<Layout_Admin/>}>
            <Route index element={<PanelAdmin/>}/>

            <Route path="user" element={<UserAll/>}/>
            <Route path="user/edit/:id" element={<UserUpdate/>}/>

            <Route path="categorias" element={<CategoriaAll/>}/>
            <Route path="categorias/create" element={<CategoriaStore/>}/>
            <Route path="categorias/edit/:id" element={<CategoriaUpdate/>}/>
            






          </Route>

          <Route path="/cliente" element={<Layout_Cliente/>}>
            <Route index element={<PanelCliente/>}/>
    
          </Route>

        </Route>

        

      </Routes>
    </Router>
  )
}

export default App

if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
            <App/>
    )
}


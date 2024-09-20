import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Config from '../Config'
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const UserUpdate = () => {
  const navigate = useNavigate();

  const {id} = useParams();
  const [name, setName] = useState("");
  const [acceso_app, setAcceso_app] = useState(false);

  useEffect(()=>{
    const getUserByID = async()=>{
      Config.getUserByID(id)
      .then(({data})=>{
        setName(data.name)
        setAcceso_app(data.acceso_app)
      })
    };
    getUserByID();
  }, [])

  const submitUpdate = async (ev) =>{
    ev.preventDefault()
    await Config.getUserUpdate({acceso_app}, id)
    navigate('/admin/user')

  }

  return (
    <div className="container bg-light">
      <div className="row">
        <Sidebar/>
        <div className="col-sm-9 mt-3 mb-3">
            <div className="card">

              <div className="card-header">
                Editar User
              </div>

              <div className="card-body">
                <form onSubmit={submitUpdate}>
                  <div className="col-sm-12">
                    <label htmlFor="name"> Nombre: </label>
                    <input type="text" className='form-control' value={name} onChange={(e)=>setName(e.target.value)} />
                  </div>

                  <div className="col-sm-12">
                    <div className='form-check form-switch'>
                      <input type='checkbox' className='form-check-input' checked={acceso_app} onChange={(e)=>setAcceso_app(!acceso_app)} role='switch' id='acceso_app'/>
                      <label className='form-check-label' htmlFor="acceso_app"> Acceso App </label>

                    </div>
                  </div>

                  <div className="btn-group mt-3">
                    <Link to={-1} className="btn btn-secondary"> Back</Link>

                    <button type='submit' className='btn btn-primary'> Actualizar User! </button>

                  </div>


                </form>
              </div>
            </div>
        </div> 
      </div>
    </div>
  )
}

export default UserUpdate

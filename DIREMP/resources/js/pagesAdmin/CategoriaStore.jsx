import React, { useState } from 'react'
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import Config from '../Config'
import { useNavigate } from 'react-router-dom';

const CategoriaStore = () => {
    const navigate = useNavigate()

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [orden, setOrden] = useState('');
    const [urlfoto, setUrlfoto] = useState('');
    
    const handleInputFileChange = async(e) =>{
        let files = e.target.files
        let reader = new FileReader();
        reader.readAsDataURL(files[0])
        reader.onload = (e) =>{
            setUrlfoto(e.target.result)
        } 
    }

    const submitStore = async(e) => {
        e.preventDefault();
        await Config.getCategoriaStore({nombre, orden, descripcion, urlfoto});
        navigate('/admin/categorias')
    }



  return (
    <div className="container bg-light">
        <div className="row">
            <Sidebar/>
            <div className="col-sm-9 mt-3 mb-3">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={submitStore}>

                            <div className="form-group row">

                                <div className="col-sm-8">
                                    <label >Nombre: </label>
                                    <input type="text" className='form-control' value={nombre} onChange={(e) => setNombre(e.target.value)}  />
                                </div>

                                <div className="col-sm-4">
                                    <label >Orden: </label>
                                    <input type="number" className='form-control' value={orden} onChange={(e) => setOrden(e.target.value)}  />
                                </div>

                                </div>
                                
                                <div className="mt-3">
                                    <label >Descripcion: </label>
                                    <textarea type="text" className='form-control' value={descripcion} onChange={(e) => setDescripcion(e.target.value)}  />
                                </div>

                                <div className="mt-3">
                                    <label >URL: </label>
                                    <input type="file" className='form-control' onChange={(e) => handleInputFileChange(e)}  />
                                </div>

                                <div className="btn-group mt-3">
                                    <Link to={-1} className="btn btn-secondary"> Back</Link>
                                    <button type='submit' className='btn btn-primary'> Crear Categoria! </button>
                                </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoriaStore

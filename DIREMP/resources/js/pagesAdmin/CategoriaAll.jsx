import React, { useEffect, useState } from 'react'
import Config from '../Config'
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom'


const CategoriaAll = () => {



    const [categorias, setCategorias] = useState([])

    useEffect(() =>{
        _getCategoriaAll();
    },[])

    const _getCategoriaAll = async () => {
        const response = await Config.getCategoriaAll();
        setCategorias(response.data);
    };

    const _deleteCategoriaByID = async (id) =>{
        const isDelete = window.confirm("Eliminar Categoria?")

        if(isDelete){
            await Config.getCategoriaDeleteByID(id)
            _getCategoriaAll();
        }
    }

  return (
    <div className="container bg-light">
        <div className="row">
            <Sidebar/>
            <div className="col-sm-9 mt-3 mb-3">
                <div className="card">
                    <div className="card-body">
                        <Link to={'/admin/categorias/create'} className='btn btn-primary mb-3'>Agregar Categoria</Link>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>ID</th> 
                                    <th>Name</th> 
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    categorias.length === 0 ? (
                                        <tr>
                                            <td colSpan="3">Loading...</td>
                                        </tr>
                                    ) : (
                                        categorias.map(categoria => (
                                            <tr key={categoria.id}>
                                                <td>{categoria.orden}</td>
                                                <td>{categoria.nombre}</td>
                                                <td>
                                                    <Link to={`/admin/categorias/edit/${categoria.id}`} className='btn btn-primary'>  Editar </Link>
                                                    <button className='btn btn-primary ' onClick={() => _deleteCategoriaByID(categoria.id)}> Eliminar </button>
                                                </td>
                                            </tr>
                                        ))
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default CategoriaAll


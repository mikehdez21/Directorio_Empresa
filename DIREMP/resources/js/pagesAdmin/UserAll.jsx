import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Config from '../Config'
import { Link } from 'react-router-dom'


const UserAll = () => {

    const [users, setUser] = useState()

    useEffect(() =>{
        getUserAll();
    },[])

    const getUserAll = async () =>{
        const response = await Config.getUserAll()
        setUser(response.data)
    }

    return (
        <div className="container bg-light">
            <div className="row">
                <Sidebar/>
                <div className="col-sm-9 mt-3 mb-3">
                    <div className="card">
                        <div className="card-body">
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
                                        !users ? (
                                            <tr>
                                                <td colSpan="2">Loading...</td>
                                            </tr>
                                        ) : (
                                            users.map(user => (
                                                <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>
                                                        <Link to={`/admin/user/edit/${user.id}`} className='btn btn-primary'>  Editar </Link>
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

export default UserAll

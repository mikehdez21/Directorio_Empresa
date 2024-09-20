import axios from 'axios'

const base_api_url = "http://127.0.0.1:8000/api/v1"

// Archivo de rutas

export default{
    // Auth - Register
    getRegister:(data)=>axios.post(`${base_api_url}/auth/register`, data),
    // Auth - Login
    getLogin:(data)=>axios.post(`${base_api_url}/auth/login`, data),
    // Auth - Logout
    getLogout:()=>axios.post(`${base_api_url}/auth/logout`),

    // Admin - Users
    getUserAll:()=>axios.get(`${base_api_url}/admin/user`),
    getUserByID:(id)=>axios.get(`${base_api_url}/admin/user/${id}`),
    getUserUpdate:(data, id)=>axios.put(`${base_api_url}/admin/user/${id}`, data),

    // Admin - Categorias
    getCategoriaAll:()=>axios.get(`${base_api_url}/admin/categorias`),
    getCategoriaByID:(id)=>axios.get(`${base_api_url}/admin/categorias/${id}`),
    getCategoriaStore:(data)=>axios.post(`${base_api_url}/admin/categorias`, data),
    getCategoriaUpdate:(data, id)=>axios.put(`${base_api_url}/admin/categorias/${id}`, data),
    getCategoriaDeleteByID:(id)=>axios.delete(`${base_api_url}/admin/categorias/${id}`),



    

}
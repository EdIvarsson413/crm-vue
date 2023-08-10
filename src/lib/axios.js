import axios from "axios"

// Creacion del cliente de Axios para facilitar las consultas a la api
const api = axios.create({
    baseURL: 'http://localhost:0829'
})

export default api
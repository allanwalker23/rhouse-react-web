import axios from 'axios'

const api = axios.create({
    baseURL:'https://dev.nspace.com.br:3333'
})

export default api;
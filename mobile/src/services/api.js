import axios from 'axios'

const api = axios.create({
    baseURL: 'http://' //IP do pc
})

export default api
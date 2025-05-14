import axios from "axios";

const ApiInstance = axios.create({
    baseURL: 'https://fakestoreapi.com',
})

export default ApiInstance;
import axios from './customize-axios';

const getTopCombo = () => {
    // return axios.get("/products/topcombo")
    return axios.get("/products/")

}

const getAllProduct = () => {
    return axios.get("/products")
}

const getProductById = (id) => {
    return axios.get(`/products/id/${id}`)
}
// http://localhost:3001/api/v1/products/topcombo
export { getTopCombo, getAllProduct, getProductById };
import { deleteApi, get, post, put } from "./http"

export const getCities = () => {
    return get('/cities')
}

export const getCity = (id) => {
    return get('/cities/' + id)
}

export const createCity = (data) => {
    return post('/cities', data)
}

export const updateCity = (id, data) => {
    return put('/cities/' + id, data)
}

export const deleteCity = (id) => {
    return deleteApi('/cities/' + id)
}
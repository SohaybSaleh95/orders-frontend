import { get, post } from "./http"

export const createService = (data) => {
    return post('/services', data);
}

export const getServices = (params = {}) => {
    return get('/services', params)
}
import { deleteApi, get, post, put } from "./http"

export const createOrder = (data) => {
    return post('/orders', data);
}

export const updateOrder = (id, data) => {
    return put('/orders/' + id, data)
}

export const getOrders = (params = {}) => {
    return get('/orders', params)
}

export const updateStatus = (id, status) => {
    return put('/orders/' + id + '/status', { status: status })
}

export const deleteOrder = (id) => {
    return deleteApi('/orders/' + id)
}

export const updateRating = (id, rating) => {
    return put('/orders/' + id + '/rating', { rating: rating })
}

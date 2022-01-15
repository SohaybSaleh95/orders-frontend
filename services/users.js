import { get, put } from './http'

export const getUsersByType = (type) => {
    return get('/users/' + type)
}

export const updateRating = (id, rating) => {
    return put('/users/rating/' + id, { rating: rating })
}

export const update = (body) => {
    return put('/users/update', body)
}
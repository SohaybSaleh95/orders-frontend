import { get, put } from './http'

export const getUsersByType = (type) => {
    return get('/users/' + type)
}

export const update = (body) => {
    return put('/users/update', body)
}
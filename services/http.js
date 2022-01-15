import axios from "axios"
import '../config'

export const get = (url, params = {}) => {
    return axios.get(`${global.config.server}${url}`, {
        headers: {
            token: `${localStorage.getItem('token')}`
        },
        params
    })
}

export const post = (url, data) => {
    return axios.post(`${global.config.server}${url}`, data, {
        headers: {
            token: `${localStorage.getItem('token')}`
        }
    })
}

export const put = (url, data) => {
    return axios.put(`${global.config.server}${url}`, data, {
        headers: {
            token: `${localStorage.getItem('token')}`
        }
    })
}

export const deleteApi = (url) => {
    return axios.delete(`${global.config.server}${url}`, {
        headers: {
            token: `${localStorage.getItem('token')}`
        }
    })
}
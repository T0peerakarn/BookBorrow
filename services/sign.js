import axios from 'axios'

const baseUrl = '/api/signs'

const createAccount = async info => {
    const result = await axios.post(baseUrl, info)

    return result.data
}

const login = async info => {
    const result = await axios.get(`${baseUrl}?username=${info.username}&password=${info.password}`)

    return result.data
}

export default {
    createAccount,
    login
}


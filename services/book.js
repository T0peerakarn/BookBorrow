import axios from 'axios'

const baseUrl = '/api/books'

const getAll = async () => {
    const result = await axios.get(baseUrl)

    return result.data
}

const getLatest = async n => {
    const result = await axios.get(`${baseUrl}?latest=${n}`)

    return result.data
}

const getPopular = async n => {
    const result = await axios.get(`${baseUrl}?popular=${n}`)

    return result.data
}

const getById = async id => {
    const result = await axios.get(`${baseUrl}?id=${id}`)

    return result.data
}

const getSimilarTitle = async search => {
    const result = await axios.get(`${baseUrl}?search=${search}`)

    return result.data
}

export default {
    getAll,
    getLatest,
    getPopular,
    getById,
    getSimilarTitle
}
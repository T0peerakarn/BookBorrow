import axios from 'axios'

const baseUrl = '/api/users'

let token = null

const setToken = newToken => {
    token = `Bearer ${newToken}`
}

const getUser = async () => {
    const config = { headers: { Authorization: token } }

    const result = await axios.get(baseUrl, config)

    return result.data
}

const getCurrentBooks = async () => {
    const config = { headers: { Authorization: token } }
    const result = await axios.get(`${baseUrl}?type=current`, config)

    return result.data
}

const getHistory = async () => {
    const config = { headers: { Authorization: token } }
    const result = await axios.get(`${baseUrl}?type=history`, config)

    return result.data
}

const getFavoriteBooks = async () => {
    const config = { headers: { Authorization: token } }
    const result = await axios.get(`${baseUrl}?type=favorite`, config)

    return result.data
}

const getIsFav = async id => {
    const config = { headers: { Authorization: token } }
    const result = await axios.get(`${baseUrl}?type=favorite&id=${id}`, config)

    return result.data
}

const borrowBook = async bookId => {
    const config = { headers: { Authorization: token } }
    const info = {
        type: 'borrow',
        bookId: bookId
    }

    await axios.post(baseUrl, info, config)
}

const toggleFavBook = async (isFav, bookId) => {
    const config = { headers: { Authorization: token } }
    const info = {
        type: 'fav',
        isFav: isFav,
        bookId: bookId
    }

    await axios.post(baseUrl, info, config)
}

const updateInfo = async (firstName, lastName) => {
    const config = { headers: { Authorization: token } }
    const info = {
        type: 'info',
        firstName: firstName,
        lastName: lastName
    }

    await axios.put(baseUrl, info, config)
}

const changePassword = async (oldPassword, newPassword) => {
    const config = { headers: { Authorization: token } }
    const info = {
        type: 'password',
        oldPassword: oldPassword,
        newPassword: newPassword
    }

    const result = await axios.put(baseUrl, info, config)
    
    return result.data
}

export default {
    setToken,
    getUser,
    getCurrentBooks,
    getHistory,
    getFavoriteBooks,
    getIsFav,
    borrowBook,
    toggleFavBook,
    updateInfo,
    changePassword,
}
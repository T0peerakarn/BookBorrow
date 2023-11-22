import axios from 'axios'

const baseUrl = '/api/librarians'

let token = null

const setToken = newToken => {
    token = `Bearer ${newToken}`
}

const deleteBook = async id => {
    const config = { headers: { Authorization: token } }
    const info = {
        type: 'deleteBook',
        bookId: id
    }

    await axios.post(baseUrl, info, config)
}

const updateBook = async (bookId, title, author, description, url) => {
    const config = { headers: { Authorization: token } }
    const info = {
        type: 'updateBook',
        bookId, bookId,
        title: title,
        author: author,
        description: description,
        url: url
    }

    await axios.post(baseUrl, info, config)
}

const getAllUsers = async () => {
    const config = { headers: { Authorization: token } }

    const result = await axios.get(`${baseUrl}?type=users`, config)
    console.log(result.data)

    return result.data
}

const deleteUser = async id => {
    const config = { headers: { Authorization: token } }
    const info = {
        type: 'deleteUser',
        userId: id
    }

    await axios.post(baseUrl, info, config)
}

const updateUser = async (userId, firstName, lastName, roleId, fine) => {
    const config = { headers: { Authorization: token } }
    const info = {
        type: 'updateUser',
        userId: userId,
        firstName: firstName,
        lastName: lastName,
        roleId: roleId,
        fine: fine
    }
    
    await axios.post(baseUrl, info, config)
}

const getAllBooks = async () => {
    const config = { headers: { Authorization: token } }

    const result = await axios.get(`${baseUrl}?type=books`, config)

    return result.data
}

const returnBook = async id => {
    const config = { headers: { Authorization: token } }
    const info = {
        type: 'returnBook',
        bookId: id
    }

    await axios.post(baseUrl, info, config)
}

const addBook = async (title, author, description, url) => {
    const config = { headers: { Authorization: token } }
    const info = {
        type: 'addBook',
        title: title,
        author: author,
        description: description,
        url: url
    }

    const result = await axios.post(baseUrl, info, config)
    console.log(result.data)

    return result.data
}

export default {
    setToken,
    deleteBook,
    updateBook,
    getAllUsers,
    deleteUser,
    updateUser,
    getAllBooks,
    returnBook,
    addBook
}
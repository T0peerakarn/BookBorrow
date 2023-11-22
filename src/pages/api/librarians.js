import { execute } from '../../../lib/libraryConnection'

const getToken = req => {
    const authorization = req.headers.authorization

    return authorization && authorization.toLowerCase().startsWith('bearer ')
        ? authorization.substring(7)
        : null
}

export default async function handler(req, res) {
    
    const jwt = require('jsonwebtoken')
    const decodedToken = jwt.verify(getToken(req), process.env.SECRET)
    const userId = decodedToken.id
    
    let query, values

    query = 'select Role.name as role from Information join Role on Information.roleId = role.id where Information.id = ?'
    values = [userId]

    const [info] = await execute({ query, values })

    if (info[0].role !== 'Librarian') {
        res.status(400).end()
    }
    
    if (req.method === 'GET') {
        const type = req.query.type

        if (type === 'users') {
            query = 'select Information.id, username, firstName, lastName, concat(firstName, \' \', lastName) as name, Role.id as roleId, Role.name as role, fine, isBorrowable from Information join Role on Information.roleId = Role.id'
            values = []
        }
        else if (type === 'books') {
            query = 'select * from Book'
            values = []
        }
    }
    else if (req.method === 'POST') {
        const type = req.body.type

        if (type === 'deleteBook') {
            
            const bookId = parseInt(req.body.bookId)

            query = 'call deleteBook(?)'
            values = [bookId]
        }
        else if (type === 'updateBook') {

            const { bookId, title, author, description, url } = req.body

            query = 'update Book set title = ?, author = ?, description = ?, coverUrl = ? where id = ?'
            values = [title, author, description, url, bookId]
        }
        else if (type === 'deleteUser') {

            const userId = parseInt(req.body.userId)

            query = 'call deleteUser(?)'
            values = [userId]
        }
        else if (type === 'updateUser') {

            const { userId, firstName, lastName, roleId, fine } = req.body

            query = 'update Information set firstName = ?, lastName = ?, roleId = ?, fine = ? where id = ?'
            values = [firstName, lastName, roleId, fine, userId]
        }
        else if (type === 'returnBook') {

            const bookId = req.body.bookId

            query = 'call returnBook(?)'
            values = [bookId]
        }
        else if (type === 'addBook') {
            
            const { title, author, description, url } = req.body

            query = 'insert into Book (title, author, description, coverUrl) values (?, ?, ?, ?)'
            values = [title, author, description, url]
        }
    }
    else {
        res.status(400).json({ error: 'Bad Request' })
    }

    const [data] = await execute({ query, values })

    res.status(200).json(data)
}
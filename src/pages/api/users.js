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

    if (req.method === 'GET') {
        query = req.query.type
            ? req.query.type === 'current'
                ? 'select Book.id, Book.title, date_format(dueDate, "%d %M, %Y") as dueDate from Borrow join Book on Borrow.bookId = Book.id where userId = ? and returnDate is null order by dueDate asc'
                : req.query.type === 'history'
                    ? 'select Book.id, Book.title, date_format(checkoutDate, "%d %M, %Y") as checkoutDate, date_format(returnDate, "%d %M, %Y") as returnDate from Borrow join Book on Borrow.bookId = Book.id where userId = ? and returnDate is not null order by checkoutDate desc'
                    : req.query.id
                        ? 'select * from Favorite where userId = ? and bookId = ?'
                        : 'select * from Favorite join Book on Favorite.bookId = Book.id where userId = ?'
            : 'select firstName, lastName, concat(firstName, \' \', lastName) as name, name as role, isBorrowable, fine, borrowCount, borrowLimit from Information left join Role on Information.roleId = Role.id where Information.id = ?'
        values = req.query.id ? [userId, req.query.id] : [userId]
    }
    else if (req.method === 'POST') {
        const type = req.body.type

        if (type === 'fav') {

            const bookId = parseInt(req.body.bookId)
            const isFav = req.body.isFav

            query = isFav
                ? 'call favBook(?, ?)'
                : 'call unfavBook(?, ?)'
            values = [userId, bookId]
        }
        else if (type === 'borrow') {
            const bookId = parseInt(req.body.bookId)

            query = 'call borrowBook(?, ?)'
            values = [userId, bookId]
        }
    }
    else if (req.method === 'PUT') {
        if (req.body.type === 'info') {
            query = 'update Information set firstName = ?, lastName = ? where id = ?'
            values = [req.body.firstName, req.body.lastName, userId]
        }
        else if (req.body.type === 'password') {

            const oldPassword = req.body.oldPassword
            const newPassword = req.body.newPassword

            query = 'select password from Information where id = ?'
            values = [userId]

            const [info] = await execute({ query, values })

            const bcrypt = require('bcrypt')
            const isPasswordCorrect = await bcrypt.compare(oldPassword, info[0].password)

            if (!isPasswordCorrect) res.status(200).json({ isError: true })
            else {
                const saltRounds = 10
                const passwordHash = await bcrypt.hash(newPassword, saltRounds)

                query = 'update Information set password = ? where id = ?'
                values = [passwordHash, userId]
            }
        }
    }
    else {
        res.status(400).json({ error: 'Bad Request' })
    }

    const [data] = await execute({ query, values })

    res.status(200).json(data)
}
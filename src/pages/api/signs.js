import { execute } from '../../../lib/libraryConnection'

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { username, password } = req.query

        let query, values

        query = 'select * from Information where username like ?'
        values = [username]

        const [info] = await execute({ query, values })

        if (info.length === 0) {
            res.status(200).json({ errorMessage: 'Invalid username or password' })
        }

        const bcrypt = require('bcrypt')
        const isPasswordCorrect = await bcrypt.compare(password, info[0].password)

        if (!isPasswordCorrect) {
            res.status(200).json({ errorMessage: 'Invalid username or password' })
        }

        const userForToken = {
            id: info[0].id
        }

        const jwt = require('jsonwebtoken')
        const token = jwt.sign(userForToken, process.env.SECRET)

        res.status(200).json({ token })
    }
    else if (req.method === 'POST') {
        
        const { firstName, lastName, username, password, confirmPassword, isAgree } = req.body
        
        if (!firstName) {
            res.status(200).json({ errorMessage: 'Please fill in your first name'})
        }
        else if (!lastName) {
            res.status(200).json({ errorMessage: 'Please fill in your last name'})
        }
        else if (!username) {
            res.status(200).json({ errorMessage: 'Please fill in your username'})
        }
        else if (!password) {
            res.status(200).json({ errorMessage: 'Please fill in your password'})
        }
        else if (password !== confirmPassword) {
            res.status(200).json({ errorMessage: 'Your passwords are mismatch'})
        }
        else if (!isAgree) {
            res.status(200).json({ errorMessage: 'Please read and agree the Terms of Service'})
        }
        else {
            let query, values

            query = 'select * from Information where username like ?'
            values = [username]

            const [existUser] = await execute({ query, values })

            if (existUser.length > 0) {
                res.status(200).json({ errorMessage: 'The username is already existed'})
            }
            else {
                const bcrypt = require('bcrypt')
                const saltRounds = 10
                const passwordHash = await bcrypt.hash(password, saltRounds)

                query = 'insert into Information (firstName, lastName, username, password) values (?, ?, ?, ?)'
                values = [firstName, lastName, username, passwordHash]

                const [information] = await execute({ query, values })

                const userForToken = {
                    id: information.insertId
                }

                const jwt = require('jsonwebtoken')
                const token = jwt.sign(userForToken, process.env.SECRET)

                res.status(200).json({ token })
            }
        }
    }
    else {
        res.status(400).json({ error: 'Bad Request' })
    }
}
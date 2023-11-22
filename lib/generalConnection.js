import mysql from 'mysql2/promise'

export async function execute ({ query, values = [] }) {

    const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        user: 'Guest',
        password: 'guestpassword',
        database: process.env.MYSQL_DATABASE,
        socketPath: process.env.MYSQL_SOCKETPATH
    })

    try {
        const results = await connection.execute(query, values)
        connection.end()

        return results
    }
    catch (err) {
        throw Error(err.message)
    }
}
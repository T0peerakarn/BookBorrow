import { execute } from '../../../lib/libraryConnection'

export default async function handler(req, res) {
    if (req.method === 'GET') {

        let query, values

        if (req.query.latest) {
            query = 'select * from Book order by id desc limit ?'
            values = [parseInt(req.query.latest)]
        }
        else if (req.query.popular) {
            query = 'select * from Book order by likes desc limit ?'
            values = [parseInt(req.query.popular)]
        }
        else if (req.query.id) {
            query = 'select * from Book where id = ?'
            values = [parseInt(req.query.id)]
        }
        else if (req.query.search) {
            query = 'select * from Book where title like ?'
            values = ['%' + req.query.search + '%']
        }
        else {
            query = 'select * from Book'
            values = []
        }

        const [data] = await execute({ query, values })

        res.status(200).json(data)
    }
    else {
        res.status(400).json({ error: 'Bad Request' })
    }
}
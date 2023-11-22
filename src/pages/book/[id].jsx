import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Info from '@/components/Info'
import bookService from '../../../services/book'
import userService from '../../../services/user'
import librarianService from '../../../services/librarian'
import { Center, Heading } from '@chakra-ui/react'

const Page = () => {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [book, setBook] = useState(null)
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('user')

        if (loggedUserJSON) {
            const userToken = JSON.parse(loggedUserJSON)

            userService.setToken(userToken.token)
            librarianService.setToken(userToken.token)

            userService
                .getUser()
                .then(data => setUser(data[0]))
        }
    }, [])

    useEffect(() => {
        bookService
            .getById(router.query.id)
            .then(data => setBook(data[0]))
    }, [refresh])

    useEffect(() => {
        setTimeout(() => {
            setRefresh(!refresh)
        }, 1000)
    }, [])

    return (
        <>
            <Header />
            {
                book
                ? <Info book={book} isLogin={user ? true : false} isBorrowable={user ? user.isBorrowable && user.borrowCount < user.borrowLimit : false} isLibrarian={user ? user.role === 'Librarian' : false}/>
                : <Center flex='1'><Heading fontSize='1.2em'>Loading...</Heading></Center>
            }
        </>
    )
}

export default Page
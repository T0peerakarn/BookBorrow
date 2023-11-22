import { useState, useEffect } from 'react'
import { Flex } from '@chakra-ui/react'
import Header from '@/components/Header'
import CurrentBorrowings from '@/components/CurrentBorrowings'
import BorrowingHistory from '@/components/BorrowingHistory'
import userService from '../../services/user'

const History = () => {

    const [currentBooks, setCurrentBooks] = useState(null)
    const [history, setHistory] = useState(null)

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('user')

        if (loggedUserJSON) {
            const userToken = JSON.parse(loggedUserJSON)

            userService.setToken(userToken.token)
        }
    }, [])

    useEffect(() => {
        userService
            .getCurrentBooks()
            .then(data => setCurrentBooks(data))

        userService
            .getHistory()
            .then(data => setHistory(data))
    }, [])

    return (
        <>
            <Header />
            <Flex flexDirection='column'>
                <CurrentBorrowings books={currentBooks} />
                &nbsp;
                <BorrowingHistory books={history} />
            </Flex>
        </>
    )
}

export default History
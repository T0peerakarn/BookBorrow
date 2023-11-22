import { useEffect, useState } from 'react'
import { Center, Heading, Input, Table, TableContainer, Tbody, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import Header from '@/components/Header'
import DashboardBookRow from '@/components/DashboardBookRow'
import Notification from '@/components/Notification'
import librarianService from '../../../services/librarian'

const BookDashboard = () => {

    const [search, setSearch] = useState('')
    const [allBooks, setAllBooks] = useState(null)

    const notiEditDisclosure = useDisclosure()
    const notiDeleteDisclosure = useDisclosure()
    const notiReturnDisclosure = useDisclosure()

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('user')

        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)

            librarianService.setToken(user.token)
        }
    }, [])

    useEffect(() => {
        librarianService
            .getAllBooks()
            .then(data => setAllBooks(data))
    }, [])

    useEffect(() => {
        if (window.localStorage.getItem('recentlyUpdateBook')) {
            window.localStorage.removeItem('recentlyUpdateBook')

            notiEditDisclosure.onOpen()

            setTimeout(() => {
                notiEditDisclosure.onClose()
            }, 3000)
        }

        if (window.localStorage.getItem('recentlyDeleteBook')) {
            window.localStorage.removeItem('recentlyDeleteBook')

            notiDeleteDisclosure.onOpen()

            setTimeout(() => {
                notiDeleteDisclosure.onClose()
            }, 3000)
        }

        if (window.localStorage.getItem('recentlyReturnBook')) {
            window.localStorage.removeItem('recentlyReturnBook')

            notiReturnDisclosure.onOpen()

            setTimeout(() => {
                notiReturnDisclosure.onClose()
            }, 3000)
        }
    }, [])

    return (
        <>
            <Header />
            <Center width='100%' padding='3em 0' flexDirection='column'>
                <Heading fontSize='1.5em'>Book Dashboard</Heading>
                <Input width='50%' margin='2em 0' placeholder='Filter by title' value={search} onChange={e => setSearch(e.target.value)}/>
                <TableContainer width='90%' height='30em' overflowY='auto'>
                    <Table variant='simple' size='md'>
                        <Thead position='sticky' top='0' zIndex='1' backgroundColor='white'>
                            <Tr>
                                <Th width='10%'>No.</Th>
                                <Th width='40%'>Title</Th>
                                <Th width='20%'>Author</Th>
                                <Th width='15%'>isAvailable</Th>
                                <Th width='5%'>&nbsp;</Th>
                                <Th width='5%'>&nbsp;</Th>
                                <Th width='5%'>&nbsp;</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                        {
                            allBooks
                            ? allBooks
                                .filter(book => {
                                    const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
                                    const regex = new RegExp(escapedSearch, 'i')
                                    return regex.test(book.title)
                                })
                                .map((book, i) => <DashboardBookRow key={i} no={i+1} book={book}/>)
                            : <></>
                        }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Center>

            {
                notiEditDisclosure.isOpen
                ? <Notification onClose={notiEditDisclosure.onClose} title='Success!' description='The book has been updated.'/>
                : <></>
            }

            {
                notiDeleteDisclosure.isOpen
                ? <Notification onClose={notiDeleteDisclosure.onClose} title='Success!' description='The book has been deleted.'/>
                : <></>
            }

            {
                notiReturnDisclosure.isOpen
                ? <Notification onClose={notiReturnDisclosure.onClose} title='Success!' description='The book has been returned.'/>
                : <></>
            }
        </>
    )
}

export default BookDashboard
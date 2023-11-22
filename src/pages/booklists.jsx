import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import Shelf from '@/components/Shelf'
import Notification from '@/components/Notification'
import bookService from '../../services/book'
import { useDisclosure } from '@chakra-ui/react'

const BookLists = () => {
    const [search, setSearch] = useState('')
    const [allBooks, setAllBooks] = useState(null)
    const notiDisclosure = useDisclosure()

    useEffect(() => {
        bookService
            .getAll()
            .then(data => setAllBooks(data))
    }, [])

    useEffect(() => {
        if (window.localStorage.getItem('recentlyDeleteBook')) {
            window.localStorage.removeItem('recentlyDeleteBook')

            notiDisclosure.onOpen()

            setTimeout(() => {
                notiDisclosure.onClose()
            }, 3000)
        }
    }, [])

    return (
        <>
            <Header />
            <SearchBar search={search} setSearch={setSearch}/>
            <Shelf display='Book Lists' books={allBooks}/>
            {
                notiDisclosure.isOpen
                ? <Notification onClose={notiDisclosure.onClose} title={`Success!`} description={`The book has ben deleted.`}/>
                : <></>
            }
        </>
    )
}

export default BookLists
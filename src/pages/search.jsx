import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import Shelf from '@/components/Shelf'
import bookService from '../../services/book'

const Search = () => {
    const router = useRouter()
    const [search, setSearch] = useState('')
    const [books, setBooks] = useState(null)

    useEffect(() => {
        setSearch(router.query.search)
        bookService
            .getSimilarTitle(router.query.search)
            .then(data => setBooks(data))
    }, [router.query.search])

    return (
        <>
            <Header />
            <SearchBar search={search} setSearch={setSearch}/>
            <Shelf display={`Search Results (${books ? books.length : 0})`} books={books}/>
        </>
    )
}

export default Search
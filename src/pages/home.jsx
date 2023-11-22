import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import Shelf from '@/components/Shelf'
import bookService from '../../services/book'

const Home = () => {
    const [search, setSearch] = useState('')
    const [latestBooks, setLastestBooks] = useState(null)
    const [popularBooks, setPopularBooks] = useState(null)

    useEffect(() => {
        bookService
            .getLatest(6)
            .then(data => setLastestBooks(data))
        
        bookService
            .getPopular(6)
            .then(data => setPopularBooks(data))
    }, [])

    return (
        <>
            <Header />
            <SearchBar search={search} setSearch={setSearch}/>
            <Shelf display='New Arrivals' books={latestBooks}/>
            <Shelf display='Most Popular' books={popularBooks}/>
        </>
    )
}

export default Home
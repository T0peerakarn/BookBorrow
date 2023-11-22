import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Shelf from '@/components/Shelf'
import userService from '../../services/user'

const Favorite = () => {
    const [favoriteBooks, setFavoriteBooks] = useState(null)

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('user')

        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)

            userService.setToken(user.token)
        }
    }, [])

    useEffect(() => {
        userService
            .getFavoriteBooks()
            .then(data => setFavoriteBooks(data))
    }, [])

    console.log(favoriteBooks)
    
    return (
        <>
            <Header />
            <Shelf display='Favorite Lists' books={favoriteBooks}/>
        </>
    )
}

export default Favorite
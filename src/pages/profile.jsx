import { useState, useEffect } from 'react'
import { HStack, Box, StackDivider } from '@chakra-ui/react'
import Header from '@/components/Header'
import Display from '@/components/Display'
import Controller from '@/components/Controller'
import Stats from '@/components/Stats'
import CurrentBorrowings from '@/components/CurrentBorrowings'
import userService from '../../services/user'

const Profile = () => {
    const [user, setUser] = useState(null)
    const [currentBooks, setCurrentBooks] = useState(null)

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('user')

        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)

            userService.setToken(user.token)
        }
    }, [])

    useEffect(() => {
        userService
            .getUser()
            .then(data => setUser(data[0]))

        userService
            .getCurrentBooks()
            .then(data => setCurrentBooks(data))
    }, [])

    return (
        <Box height='100vh' display='flex' flexDirection='column'>
            <Header />
            <HStack flex='1' spacing='0' divider={<StackDivider borderColor='gray.200'/>}>
                <Box width='25%' height='100%' display='flex' flexDirection='column' alignItems='center'>
                    <Display username={user ? user.name : ''}/>
                    <Controller />
                </Box>

                <Box width='100%' display='flex' flexDirection='column' paddingLeft='1em'>
                    <Stats user={user}/>
                    <CurrentBorrowings books={currentBooks}/>
                </Box>
            </HStack>
        </Box>
    )
}

export default Profile
import { useEffect, useState } from 'react'
import { Center, Heading, Input, Table, TableContainer, Tbody, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import Header from '@/components/Header'
import DashboardUserRow from '@/components/DashboardUserRow'
import Notification from '@/components/Notification'
import librarianService from '../../../services/librarian'

const UserDashboard = () => {

    const [search, setSearch] = useState('')
    const [allUsers, setAllUsers] = useState(null)

    const notiUpdateDisclosure = useDisclosure()
    const notiDeleteDisclosure = useDisclosure()
    
    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('user')

        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)

            librarianService.setToken(user.token)
        }
    }, [])

    useEffect(() => {
        librarianService
            .getAllUsers()
            .then(data => setAllUsers(data))
    }, [])
    
    useEffect(() => {
        if (window.localStorage.getItem('recentlyDeleteUser')) {
            window.localStorage.removeItem('recentlyDeleteUser')

            notiDeleteDisclosure.onOpen()

            setTimeout(() => {
                notiDeleteDisclosure.onClose()
            }, 3000)
        }

        if (window.localStorage.getItem('recentlyUpdateUser')) {
            window.localStorage.removeItem('recentlyUpdateUser')

            notiUpdateDisclosure.onOpen()

            setTimeout(() => {
                notiUpdateDisclosure.onClose()
            }, 3000)
        }
    }, [])

    return (
        <>
            <Header />
            <Center width='100%' padding='3em 0' flexDirection='column'>
                <Heading fontSize='1.5em'>User Dashboard</Heading>
                <Input width='50%' margin='2em 0' placeholder='Filter by username' value={search} onChange={e => setSearch(e.target.value)}/>
                <TableContainer width='90%' height='30em' overflowY='auto'>
                    <Table variant='simple' size='md'>
                        <Thead position='sticky' top='0' zIndex='1' backgroundColor='white'>
                            <Tr>
                                <Th width='10%'>No.</Th>
                                <Th width='20%'>Username</Th>
                                <Th width='30%'>Name</Th>
                                <Th width='10%'>Role</Th>
                                <Th width='10%'>Fine</Th>
                                <Th width='10%'>Status</Th>
                                <Th width='5%'>&nbsp;</Th>
                                <Th width='5%'>&nbsp;</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                        {
                            allUsers
                            ? allUsers
                                .filter(user => {
                                    const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
                                    const regex = new RegExp(escapedSearch, 'i')
                                    return regex.test(user.username)
                                })
                                .map((user, i) => <DashboardUserRow key={i} no={i+1} user={user}/>)
                            : <></>
                        }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Center>

            {
                notiDeleteDisclosure.isOpen
                ? <Notification onClose={notiDeleteDisclosure.onClose} title='Success!' description='The user has been deleted.'/>
                : <></>
            }

            {
                notiUpdateDisclosure.isOpen
                ? <Notification onClose={notiUpdateDisclosure.onClose} title='Success!' description='The user has been updated.'/>
                : <></>
            }
        </>
        
    )
}

export default UserDashboard
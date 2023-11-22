import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Box, Grid, GridItem, Heading, Divider, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import Nav from './Nav'
import DashboardButton from './DashboardButton'
import { navsNormal, navsMember } from '@/contents/navs'
import userService from '../../services/user'

const Header = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('user')

        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)

            userService.setToken(user.token)

            userService
                .getUser()
                .then(data => setUser(data[0]))
        }
    }, [])

    return (
        <Box>
            <Grid gridTemplateColumns='1fr 4fr' width='100%' padding='3em 1em' fontWeight='bold'>

                <GridItem margin='auto'>
                    <Link href='/'>
                        <Heading fontSize='1.5em' _hover={{ textDecoration: 'underline' }}>BookBorrow</Heading>
                    </Link>
                </GridItem>

                {
                    user
                    ?   <GridItem display='flex' justifyContent='right'>
                            {
                                user.role === 'Librarian'
                                ?   <DashboardButton />
                                :   <></>
                            }
                            { navsMember.map((nav, i) => <Nav key={i} display={nav.display} page={nav.page}/>) }
                        </GridItem>
                    :   <GridItem display='flex' justifyContent='right'>
                            { navsNormal.map((nav, i) => <Nav key={i} display={nav.display} page={nav.page}/>) }
                        </GridItem>
                }

            </Grid>
            <Divider />
        </Box>
    )
}

export default Header
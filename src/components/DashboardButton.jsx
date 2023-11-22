import { Box, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const DashboardButton = () => {

    const router = useRouter()

    return (
        <Box margin='auto 1.5em'>
            <Menu>
                <MenuButton fontWeight='bold' _hover={{ textDecoration: 'underline' }}>Dashboard</MenuButton>
                <MenuList>
                    <MenuGroup title='USER' fontSize='0.6em' fontWeight='bold'>
                        <MenuItem onClick={() => router.push('/dashboard/user')} fontSize='0.9em'>User Dashboard</MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup title='BOOK' fontSize='0.6em' fontWeight='bold'>
                        <MenuItem onClick={() => router.push('/dashboard/book')} fontSize='0.9em'>Book Dashboard</MenuItem>
                        <MenuItem onClick={() => router.push('/dashboard/newbook')} fontSize='0.9em'>Add a new book</MenuItem>
                    </MenuGroup>
                </MenuList>
            </Menu>
        </Box>
    )
}

export default DashboardButton
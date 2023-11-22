import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'

const Nav = ({ display, page }) => {
    return (
        <Box margin='auto 1.5em'>
            <Link href={page}>
                <Text _hover={{ textDecoration: 'underline' }}>{display}</Text>
            </Link>
        </Box>
    )
}

export default Nav
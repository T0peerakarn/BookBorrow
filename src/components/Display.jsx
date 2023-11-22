import { IoPersonCircleOutline } from 'react-icons/io5'
import { Box, Heading } from '@chakra-ui/react'

const Display = ({ username }) => {
    return (
        <Box width='100%' display='flex' flexDirection='column' alignItems='center' marginBottom='auto'>
            <IoPersonCircleOutline size='12em'/>
            <Heading fontSize='1.5em'>{username}</Heading>
        </Box>
    )
}

export default Display
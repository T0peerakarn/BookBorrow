import { useRouter } from 'next/router'
import { Box, Button, Divider, useDisclosure } from '@chakra-ui/react'
import EditInfoModal from './ProfileEditInfoModal'
import ChangeModal from './ChangeModal'

const Controller = () => {

    const router = useRouter()

    const editDisclosure = useDisclosure()
    const changeDisclosure = useDisclosure()

    const signOutHandler = () => {
        window.localStorage.removeItem('user')
        router.push('/')
    }

    return (
        <Box width='100%' display='flex' flexDirection='column' alignItems='center' marginTop='auto'>

            <Button width='70%' colorScheme='gray' onClick={editDisclosure.onOpen}>Edit profile</Button>
            <Button width='70%' marginTop='0.5em' marginBottom='0.3em' colorScheme='gray' onClick={changeDisclosure.onOpen}>Change password</Button>
            <Divider width='100%'/>
            <Button width='70%' marginTop='0.3em' marginBottom='0.5em' colorScheme='red' onClick={signOutHandler}>Sign out</Button>

            <EditInfoModal isOpen={editDisclosure.isOpen} onClose={editDisclosure.onClose}/>
            <ChangeModal isOpen={changeDisclosure.isOpen} onClose={changeDisclosure.onClose}/>
        </Box>
    )
}

export default Controller
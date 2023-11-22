import { useState } from 'react'
import { useRouter } from 'next/router'
import { FormControl, FormLabel, Input, Center, Button, Box, Text } from '@chakra-ui/react'
import signService from '../../services/sign'

const SignInForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('foo')
    const [visible, setVisible] = useState('hidden')

    const router = useRouter()
    
    const signInHandler = async () => {
        const info = { username, password }

        const result = await signService.login(info)
        
        if (result.errorMessage) {
            setErrorMessage(result.errorMessage)
            setVisible('visible')
        }
        else {
            setErrorMessage('foo')
            setVisible('hidden')

            window.localStorage.setItem('user', JSON.stringify(result))

            router.push('/')
        }
    }

    const onClickHandler = () => {
        router.push('/signup')
    }

    const onKeyDownHandler = e => {
        if (e.keyCode === 13) {
            signInHandler()
        }
    }

    return (
        <FormControl width='30vw' onKeyDown={onKeyDownHandler}>
            <FormLabel marginTop='2em'>Username</FormLabel>
            <Input id='username' value={username} onChange={e => setUsername(e.target.value)}/>

            <FormLabel marginTop='2em'>Password</FormLabel>
            <Input id='password' type='password' value={password} onChange={e => setPassword(e.target.value)}/>

            <Box display='block' marginTop='1em'>
                <Text textAlign='center' verticalAlign='bottom' fontSize='0.9em' color='red' visibility={visible}>{errorMessage}</Text>
                <Center>
                    <Button colorScheme='teal' width='15em' fontWeight='bold' onClick={signInHandler}>Sign in</Button>
                </Center>
            </Box>

            <Center marginTop='1em'>
                <Text as='span' textAlign='center' fontSize='0.8em' color='#333'>Don't have a BookBorrow account?&nbsp;</Text>
                <Text as='span' textAlign='center' fontSize='0.8em' color='#333' cursor='pointer' onClick={onClickHandler} _hover={{ textDecoration: 'underline' }}>Create now</Text>
            </Center>
        </FormControl>
    )
}

export default SignInForm
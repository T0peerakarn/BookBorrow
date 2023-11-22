import { useState } from 'react'
import { useRouter } from 'next/router'
import { FormControl, FormLabel, Input, Checkbox, Box, Button, Text, useDisclosure, Center } from '@chakra-ui/react'
import TermsModal from './TermsModal'
import signService from '../../services/sign'
import userService from '../../services/user'

const SignUpForm = () => {
    const router = useRouter()
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isAgree, setIsAgree] = useState(false)
    const [errorMessage, setErrorMessage] = useState('foo')
    const [visible, setVisible] = useState('hidden')

    const { isOpen, onOpen, onClose } = useDisclosure()

    const signUpHandler = async () => {
        const info = {
            firstName,
            lastName,
            username,
            password,
            confirmPassword,
            isAgree
        }

        const result = await signService.createAccount(info)

        if (result.errorMessage) {
            setErrorMessage(result.errorMessage)
            setVisible('visible')
        }
        else {
            setErrorMessage('foo')
            setVisible('hidden')

            const token = JSON.stringify(result)

            window.localStorage.setItem('user', token)
            userService.setToken(result.token)

            router.push('/')
        }
    }

    const onClickHandler = () => {
        router.push('/signin')
    }

    const onKeyDownHandler = e => {
        if (e.keyCode === 13) {
            signUpHandler()
        }
    }

    return (
        <FormControl isRequired onKeyDown={onKeyDownHandler}>
            <FormLabel marginTop='2em'>First Name</FormLabel>
            <Input id='firstName' value={firstName} onChange={e => setFirstName(e.target.value)}/>

            <FormLabel marginTop='1em'>Last Name</FormLabel>
            <Input id='lastName' value={lastName} onChange={e => setLastName(e.target.value)}/>

            <FormLabel marginTop='1em'>Username</FormLabel>
            <Input id='username' value={username} onChange={e => setUsername(e.target.value)}/>

            <FormLabel marginTop='1em'>Password</FormLabel>
            <Input id='password' type='password' value={password} onChange={e => setPassword(e.target.value)}/>

            <FormLabel marginTop='1em'>Confirm Password</FormLabel>
            <Input id='confirmPassword' type='password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>

            <Box marginTop='1em' display='flex' alignItems='center'>
                <Checkbox isChecked={isAgree} onChange={() => setIsAgree(!isAgree)} colorScheme='teal' />
                <Text>&nbsp;I agree to the&nbsp;</Text>
                <Text as='span' fontWeight='bold' cursor='pointer' onClick={onOpen} _hover={{ textDecoration: 'underline' }}>Terms of Service</Text>
            </Box>

            <Box display='block' margin='1em'>
                <Text textAlign='center' verticalAlign='bottom' fontSize='0.9em' color='red' visibility={visible}>{errorMessage}</Text>
                <Center>
                    <Button colorScheme='teal' width='15em' fontWeight='bold' onClick={signUpHandler}>Create an account</Button>
                </Center>
            </Box>

            <Center marginTop='1em'>
                <Text as='span' textAlign='center' fontSize='0.8em' color='#333'>Already a user?&nbsp;</Text>
                <Text as='span' textAlign='center' fontSize='0.8em' color='#333' cursor='pointer' onClick={onClickHandler} _hover={{ textDecoration: 'underline' }}>Sign in</Text>
            </Center>

            <TermsModal isOpen={isOpen} onClose={onClose} />
        </FormControl>
    )
}

export default SignUpForm
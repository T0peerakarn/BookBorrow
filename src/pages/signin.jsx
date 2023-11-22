import { Center, Card, Heading } from '@chakra-ui/react'
import SignInForm from '@/components/SignInForm'

const SignIn = () => {
    return (
        <Center width='100vw' height='100vh'>
            <Card padding='3em'>
                <Heading fontSize='1.5em' textAlign='center'>Sign in to BookBorrow</Heading>
                <SignInForm />
            </Card>
        </Center>
    )
}

export default SignIn
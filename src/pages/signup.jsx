import { Grid, GridItem, Heading } from '@chakra-ui/react'
import Promote from '@/components/Promote'
import SignUpForm from '@/components/SignUpForm'

const SignUp = () => {
    return (
        <>
            <Grid width='100vw' height='100vh' gridTemplateColumns='11fr 9fr'>
                <GridItem>
                    <Promote />
                </GridItem>

                <GridItem display='flex' flexDirection='column' justifyContent='center' alignItems='center' padding='5em'>
                    <Heading fontSize='1.5em'>Create a BookBorrow account</Heading>
                    <SignUpForm />
                </GridItem>
            </Grid>
        </>
    )
}

export default SignUp
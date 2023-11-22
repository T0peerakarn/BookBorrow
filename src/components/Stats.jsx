import { Text, Grid, GridItem } from '@chakra-ui/react'

const Stats = ({ user }) => {
    return user
        ?   <>
                <Grid gridTemplateRows='repeat(4, 1fr)' gridTemplateColumns='1fr 4fr' gap='1em' marginLeft='3em'>   
                    <GridItem colSpan='1'>
                        <Text as='span' fontSize='1.2em' fontWeight='bold'>Role: &nbsp;</Text>
                    </GridItem>

                    <GridItem colSpan='1'>
                        <Text as='span' fontSize='1.2em'>{user.role}</Text>
                    </GridItem>
                    
                    <GridItem colSpan='1'>
                        <Text as='span' fontSize='1.2em' fontWeight='bold'>Status: &nbsp;</Text>
                    </GridItem>
                    
                    <GridItem colSpan='1'>
                        <Text as='span' fontSize='1.2em' color={user.isBorrowable ? 'green' : 'red'}>{user.isBorrowable ? 'Eligible' : 'Restricted'}</Text>
                    </GridItem>

                    <GridItem colSpan='1'>
                        <Text as='span' fontSize='1.2em' fontWeight='bold'>Borrow Limit: &nbsp;</Text>
                    </GridItem>
                    
                    <GridItem colSpan='1'>
                        <Text as='span' fontSize='1.2em'>{user.borrowLimit} books concurrently</Text>
                    </GridItem>
                    
                    <GridItem colSpan='1'>
                        <Text as='span' fontSize='1.2em' fontWeight='bold'>Fine: &nbsp;</Text>
                    </GridItem>
                    
                    <GridItem colSpan='1'>
                        <Text as='span' fontSize='1.2em'>{user.fine} ฿</Text>
                    </GridItem>
                </Grid>
            </>
        :   <></>
}

export default Stats
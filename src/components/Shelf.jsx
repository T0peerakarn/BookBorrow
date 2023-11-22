import { Box, Heading, Center, Grid } from '@chakra-ui/react'
import Book from './Book'

const Shelf = ({ display, books }) => {

    return (
        <Box margin='0 auto' padding='3em 1em'>
            <Heading textAlign='center' fontSize='1.5em' marginBottom='1em'>{display}</Heading>
            <Center>
                <Grid gridTemplateColumns='repeat(6, 1fr)'>
                    {
                        books
                        ? books.map((book, i)=> <Book key={i} book={book}/>)
                        : <></> 
                    }
                </Grid>
            </Center>
        </Box>
    )
}

export default Shelf
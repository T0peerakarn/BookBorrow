import { Grid, GridItem, Text, TableContainer, Table, Thead, Tr, Th, Tbody } from '@chakra-ui/react'
import HistoryRow from './HistoryRow'

const BorrowingHistory = ({ books }) => {
    return (
        <>
            <Grid gridTemplateRows='repeat(1, 1fr)' gridTemplateColumns='1fr 4fr' marginTop='1em' marginLeft='3em'>   
                <GridItem colSpan='2'>
                    <Text as='span' fontSize='1.2em' fontWeight='bold'>Borrowing History:</Text>
                </GridItem>
            </Grid>
            <TableContainer width='80%' height='16em' alignSelf='center' marginTop='1em' overflowY='auto'>
                <Table variant='simple' size='md'>
                    <Thead position='sticky' top='0' zIndex='1' backgroundColor='white'>
                        <Tr>
                            <Th width='10%'>No.</Th>
                            <Th width='50%'>Title</Th>
                            <Th width='20%'>Check-out Date</Th>
                            <Th width='20%'>Returned Date</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            books
                            ?   books.map((book, i) => <HistoryRow key={i} no={i+1} book={book}/>)
                            :   <></>
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default BorrowingHistory
import { Tr, Td, Text } from '@chakra-ui/react'
import Link from 'next/link'

const HistoryRow = ({ no, book }) => {
    return (
        <Tr>
            <Td maxWidth='0' overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>{no}</Td>
            <Td maxWidth='0' overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>
                <Link href={`/book/${book.id}`}>
                    <Text _hover={{ textDecoration: 'underline' }}>
                        {book.title}
                    </Text>
                </Link>
            </Td>
            <Td maxWidth='0' overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>{book.checkoutDate}</Td>
            <Td maxWidth='0' overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>{book.returnDate}</Td>
        </Tr>
    )
}

export default HistoryRow
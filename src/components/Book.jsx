import { GridItem, Center, Image, Heading } from '@chakra-ui/react'
import Link from 'next/link'

const Book = ({ book }) => {
    return (
        <GridItem>
            <Link href={`/book/${book.id}`}>
                <Center display='block' padding='1em' width='13em' height='18em'>
                    <Image src={book.coverUrl} width='7em' height='10em' margin='0 auto 1em auto' shadow='0 0 0.5em #333'/>
                    <Heading fontSize='.9em' textAlign='center' margin='0 auto 0.5em auto' noOfLines='2'>{book.title}</Heading>
                    <Heading fontSize='.7em' textAlign='center' color='#333'>{book.author}</Heading>
                </Center>
            </Link>
        </GridItem>
    )
}

export default Book
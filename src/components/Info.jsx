import { useState, useEffect } from 'react'
import { Box, Grid, GridItem, Heading, Image, Text, Button, useDisclosure } from '@chakra-ui/react'
import { HiOutlineHeart, HiHeart } from 'react-icons/hi2'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import BorrowModal from './BorrowModal'
import DeleteModal from './InfoDeleteBookModal'
import userService from '../../services/user'
import EditBookModal from './InfoEditBookModal';

const Info = ({ book, isLogin, isBorrowable, isLibrarian }) => {

    const [isFav, setIsFav] = useState(false)
    const borrowDisclosure = useDisclosure()
    const editBookDisclosure = useDisclosure()
    const deleteDisclosure = useDisclosure()

    const toggleLikeHandler = () => {
        setIsFav(!isFav)
        userService.toggleFavBook(!isFav, book.id)
    }

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('user')

        if (loggedUserJSON) {
            const userToken = JSON.parse(loggedUserJSON)

            userService.setToken(userToken.token)
            
            userService
                .getIsFav(book.id)
                .then(data => setIsFav(data.length > 0 ? true : false))
        }
    }, [])

    return (
        <>
            <Box display='flex' justifyContent='center' marginTop='6em'>
                <Grid width='60em' height='25em' gridTemplateRows='repeat(5, 1fr)' gridTemplateColumns='repeat(7, 1fr)'>

                    <GridItem colSpan='3' display='flex' justifyContent='center' alignItems='center'>
                        <Heading fontSize='1.3em' textAlign='center'>{book.title}</Heading>
                    </GridItem>

                    <GridItem colSpan='4'>
                    </GridItem>

                    <GridItem rowSpan='4' colSpan='3' display='flex' justifyContent='center' alignItems='center'>
                        <Image src={book.coverUrl} maxWidth='14.235em' height='20em' shadow='0 0 0.5em #333'/> 
                    </GridItem>

                    <GridItem colSpan='1' display='flex' alignItems='center'>
                        <Text fontSize='1em' fontWeight='bold'>Author:</Text>
                    </GridItem>
                    <GridItem colSpan='3' display='flex' alignItems='center'>
                        <Text fontSize='1em' fontWeight='bold' color='#333'>{book.author}</Text>
                    </GridItem>

                    <GridItem colSpan='1' display='flex' alignItems='center'>
                        <Text fontSize='1em' fontWeight='bold'>Description:</Text>
                    </GridItem>
                    <GridItem colSpan='3' display='flex' alignItems='center'>
                        <Text fontSize='1em' fontWeight='bold' color='#333'>{book.description}</Text>
                    </GridItem>

                    <GridItem colSpan='1' display='flex' alignItems='center'>
                        <Text fontSize='1em' fontWeight='bold'>Status:</Text>
                    </GridItem>
                    <GridItem colSpan='3' display='flex' alignItems='center'>
                        {
                            book.isAvailable
                            ? <Text fontSize='1em' color='green' fontWeight='bold'>Available</Text>
                            : <Text fontSize='1em' color='red' fontWeight='bold'>Not Available</Text>
                        }
                    </GridItem>

                    {
                        isLogin
                        ?   <>
                                <GridItem colSpan='2' display='flex' alignItems='center'>
                                    <Button colorScheme='teal' width='15em' fontWeight='bold' onClick={borrowDisclosure.onOpen} isDisabled={!book.isAvailable || !isBorrowable}>Borrow</Button>
                                </GridItem>

                                <GridItem colSpan='2' display='flex' alignItems='center'>
                                    {
                                        isFav
                                        ? <HiHeart size='2em' cursor='pointer' color='red' onClick={toggleLikeHandler}/>
                                        : <HiOutlineHeart size='2em' cursor='pointer' onClick={toggleLikeHandler}/>
                                    }
                                    {
                                        isLibrarian
                                        ?   <>
                                                &nbsp;&nbsp;
                                                <AiOutlineEdit marginleft='1em' size='2em' cursor='pointer' onClick={editBookDisclosure.onOpen}/>
                                                &nbsp;&nbsp;
                                                <AiOutlineDelete marginleft='1em' size='2em' cursor='pointer' onClick={deleteDisclosure.onOpen}/>
                                            </>
                                        :   <></>
                                    }
                                </GridItem>
                            </>
                        : <></>
                    }
                </Grid>
            </Box>

            <BorrowModal bookId={book.id} isOpen={borrowDisclosure.isOpen} onClose={borrowDisclosure.onClose}/>
            <EditBookModal book={book} isOpen={editBookDisclosure.isOpen} onClose={editBookDisclosure.onClose}/>
            <DeleteModal book={book} isOpen={deleteDisclosure.isOpen} onClose={deleteDisclosure.onClose}/>
        </>
    )
}

export default Info
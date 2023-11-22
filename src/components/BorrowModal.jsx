import { useRouter } from 'next/router'
import { Text, Button, Divider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Grid, GridItem, useDisclosure } from '@chakra-ui/react'
import userService from '../../services/user'
import Notification from './Notification'
import { useEffect } from 'react'

const BorrowModal = ({ bookId, isOpen, onClose }) => {

    const router = useRouter()
    const notiDisclosure = useDisclosure()

    const confirmHandler = () => {
        userService.borrowBook(bookId)

        window.localStorage.setItem('recentlyBorrow', true)

        router.reload()
    }

    useEffect(() => {
        if (window.localStorage.getItem('recentlyBorrow')) {
            window.localStorage.removeItem('recentlyBorrow')

            notiDisclosure.onOpen()

            setTimeout(() => {
                notiDisclosure.onClose()
            }, 3000)
        }
    }, [])

    return (
        <>
            {
                notiDisclosure.isOpen
                    ? <Notification onClose={notiDisclosure.onClose} title={`Congratulation!`} description={`You've successfully borrowed the book you requested. Happy reading!`}/>
                    : <></>
            }
            <Modal isOpen={isOpen} onClose={onClose} size='xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontWeight='bold'>Book Borrowing Confirmation</ModalHeader>
                    <ModalCloseButton />
                    <Divider />

                    <ModalBody display='flex' flexDirection='column' alignItems='center'>
                        <Grid gridTemplateRows='1fr 1fr' gridTemplateColumns='1fr 3fr 3fr 1fr' margin='2em 0' rowGap='1em'>
                            <GridItem></GridItem>
                            <Text fontSize='1.2em' fontWeight='bold'>Check-out Date:</Text>
                            <Text fontSize='1.2em'>15 November, 2023</Text>
                            <GridItem></GridItem>

                            <GridItem></GridItem>
                            <Text fontSize='1.2em' fontWeight='bold'>Due Date:</Text>
                            <Text fontSize='1.2em'>22 November, 2023</Text>
                            <GridItem></GridItem>
                        </Grid>
                        <Text color='red' fontSize='0.9em' textAlign='center' width='70%'>Please be reminded to return the book within the specified due date to avoid any late fees or penalties.</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button width='6em' colorScheme='red' marginRight='1em' onClick={onClose}>Cancel</Button>
                        <Button width='6em' colorScheme='teal' onClick={confirmHandler}>Confirm</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default BorrowModal
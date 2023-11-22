import { useRouter } from 'next/router'
import { Button, Divider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import librarianService from '../../services/librarian'


const DeleteModal = ({ book, isOpen, onClose }) => {

    const router = useRouter()

    const confirmHandler = () => {
        librarianService.deleteBook(book.id)

        window.localStorage.setItem('recentlyDeleteBook', true)

        router.push('/booklists')
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size='xl'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader fontWeight='bold'>Delete the book?</ModalHeader>
                <ModalCloseButton />
                <Divider />

                <ModalBody>
                    You will not be able to recover it.
                </ModalBody>

                <ModalFooter>
                    <Button width='6em' colorScheme='gray' marginRight='1em' onClick={onClose}>Cancel</Button>
                    <Button width='6em' colorScheme='red' onClick={confirmHandler}>Confirm</Button>
                </ModalFooter>

            </ModalContent>
        </Modal>
    )
}

export default DeleteModal
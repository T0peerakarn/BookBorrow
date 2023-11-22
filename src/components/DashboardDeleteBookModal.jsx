import { useRouter } from 'next/router'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, Divider, ModalBody, ModalFooter, Button } from '@chakra-ui/react'
import librarianService from '../../services/librarian'

const DashboardDeleteBookModal = ({ book, isOpen, onClose }) => {

    const router = useRouter()

    const deleteHandler = () => {
        librarianService.deleteBook(book.id)

        window.localStorage.setItem('recentlyDeleteBook', true)

        router.reload()
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size='xl'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader fontWeight='bold'>Delete the book?</ModalHeader>
                <ModalCloseButton />
                <Divider />

                <ModalBody>
                    This will delete the book <b>{book.title}</b> permanently.
                    You will not be able to recover it.
                </ModalBody>

                <ModalFooter>
                    <Button width='6em' colorScheme='gray' marginRight='1em' onClick={onClose}>Cancel</Button>
                    <Button width='6em' colorScheme='red' onClick={deleteHandler}>Confirm</Button>
                </ModalFooter>

            </ModalContent>
        </Modal>
    )
}

export default DashboardDeleteBookModal
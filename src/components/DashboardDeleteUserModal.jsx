import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, Divider, ModalBody, ModalFooter, Button } from '@chakra-ui/react'
import librarianService from '../../services/librarian'
import { useRouter } from 'next/router'

const DashboardDeleteUserModal = ({ user, isOpen, onClose }) => {

    const router = useRouter()

    const deleteHandler = () => {
        librarianService.deleteUser(user.id)

        window.localStorage.setItem('recentlyDeleteUser', true)

        router.reload()
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size='xl'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader fontWeight='bold'>Delete the user {user.username}?</ModalHeader>
                <ModalCloseButton />
                <Divider />

                <ModalBody>
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

export default DashboardDeleteUserModal
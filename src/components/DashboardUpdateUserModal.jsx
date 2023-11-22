import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, Divider, ModalBody, ModalFooter, Button, Select, FormControl, FormLabel } from '@chakra-ui/react'
import RequiredInput from './RequiredInput'
import librarianService from '../../services/librarian'


const DashboardUpdateUserModal = ({ user, isOpen, onClose }) => {

    const router = useRouter()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [role, setRole] = useState('')
    const [fine, setFine] = useState('')

    const firstNameError = firstName === ''
    const lastNameError = lastName === ''
    const fineError = fine === ''

    const updateHandler = () => {
        window.localStorage.setItem('recentlyUpdateUser', true)

        librarianService.updateUser(user.id, firstName, lastName, role, fine)

        router.reload()
    }

    useEffect(() => {
        setFirstName(user.firstName)
        setLastName(user.lastName)
        setRole(user.roleId)
        setFine(user.fine)
    }, [user])

    return (
        <Modal isOpen={isOpen} onClose={onClose} size='xl'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader fontWeight='bold'>Update the user {user.username}</ModalHeader>
                <ModalCloseButton />
                <Divider />

                <ModalBody>
                    <RequiredInput error={firstNameError} display='First Name' variable={firstName} setFunction={setFirstName}/>
                    <RequiredInput error={lastNameError} display='Last Name' variable={lastName} setFunction={setLastName}/>
                    <FormControl>
                        <FormLabel marginTop='1em'>Role</FormLabel>
                        <Select value={role} onChange={e => setRole(e.target.value)}>
                            <option value='1'>Librarian</option>
                            <option value='2'>Member</option>
                        </Select>
                        <Text fontSize='0.8em' color='red' marginLeft='1em' visibility='hidden'>foo</Text>
                    </FormControl>
                    <RequiredInput error={fineError} display='Fine' variable={fine} setFunction={setFine}/>
                </ModalBody>

                <ModalFooter>
                    <Button width='6em' colorScheme='gray' marginRight='1em' onClick={onClose}>Cancel</Button>
                    <Button width='6em' colorScheme='teal' onClick={updateHandler} isDisabled={firstNameError || lastNameError || fineError}>Confirm</Button>
                </ModalFooter>

            </ModalContent>
        </Modal>
    )
}

export default DashboardUpdateUserModal
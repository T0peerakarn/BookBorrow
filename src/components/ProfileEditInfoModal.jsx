import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Button, Divider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import RequiredInput from './RequiredInput'
import Notification from './Notification'
import userService from '../../services/user'

const EditInfoModal = ({ isOpen, onClose }) => {

    const router = useRouter()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const firstNameError = firstName === ''
    const lastNameError = lastName === ''

    const notiDisclosure = useDisclosure()

    const confirmHandler = () => {
        userService.updateInfo(firstName, lastName)

        window.localStorage.setItem('recentlyUpdateInfo', true)
        
        router.reload()
    }

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('user')

        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)

            userService.setToken(user.token)
        }
    }, [])

    useEffect(() => {
        userService
            .getUser()
            .then(data => {
                setFirstName(data[0].firstName)
                setLastName(data[0].lastName)
            })
    }, [])

    useEffect(() => {
        if (window.localStorage.getItem('recentlyUpdateInfo')) {
            window.localStorage.removeItem('recentlyUpdateInfo')

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
                    ? <Notification onClose={notiDisclosure.onClose} title={`Success!`} description={`Your information has been updated.`}/>
                    : <></>
            }
            <Modal isOpen={isOpen} onClose={onClose} size='xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontWeight='bold'>Edit profile</ModalHeader>
                    <ModalCloseButton />
                    <Divider />

                    <ModalBody>
                        <RequiredInput error={firstNameError} display='First Name' variable={firstName} setFunction={setFirstName}/>
                        <RequiredInput error={lastNameError} display='Last Name' variable={lastName} setFunction={setLastName}/>
                    </ModalBody>

                    <ModalFooter>
                        <Button width='6em' colorScheme='red' marginRight='1em' onClick={onClose}>Cancel</Button>
                        <Button width='6em' colorScheme='teal' isDisabled={firstNameError || lastNameError} onClick={confirmHandler}>Confirm</Button>
                    </ModalFooter>

                </ModalContent>
            </Modal>
        </>
    )
}

export default EditInfoModal
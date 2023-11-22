import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Text, Button, Divider, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import Notification from './Notification'
import userService from '../../services/user'


const ChangeModal = ({ isOpen, onClose }) => {

    const router = useRouter()
    
    const [data, setData] = useState(null)
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')

    const mismatchPasswords = newPassword !== confirmNewPassword

    const notiDisclosure = useDisclosure()

    const confirmHandler = () => {
        userService
            .changePassword(oldPassword, newPassword)
            .then(data => {
                setData(data)

                if (!data.isError) {
                    setOldPassword('')
                    setNewPassword('')
                    setConfirmNewPassword('')

                    window.localStorage.setItem('recentlyChangePassword', true)

                    router.reload()
                }
            })
    }

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('user')

        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)

            userService.setToken(user.token)
        }
    }, [])

    useEffect(() => {
        if (window.localStorage.getItem('recentlyChangePassword')) {
            window.localStorage.removeItem('recentlyChangePassword')

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
                ? <Notification onClose={notiDisclosure.onClose} title={`Success!`} description={`Your password has been changed.`}/>
                : <></>
            }
            <Modal isOpen={isOpen} onClose={onClose} size='xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontWeight='bold'>Change password</ModalHeader>
                    <ModalCloseButton />
                    <Divider />

                    <ModalBody>
                        <FormControl>
                            <FormLabel marginTop='1em'>Old Password</FormLabel>
                            <Input type='password' id='oldPassword' value={oldPassword} onChange={e => setOldPassword(e.target.value)}></Input>                   
                        </FormControl>

                        <FormControl isInvalid={mismatchPasswords}>
                            <FormLabel marginTop='0.5em'>New Password</FormLabel>
                            <Input type='password' id='newPassword' value={newPassword} onChange={e => setNewPassword(e.target.value)}></Input>

                            <FormLabel marginTop='0.5em'>Confirm New Password</FormLabel>
                            <Input type='password' id='confirmNewPassword' value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)}></Input>
                            <Text fontSize='0.8em' color='red' marginTop='1em' marginLeft='1em' visibility={mismatchPasswords ? 'visible' : 'hidden'}>Passwords are mismatch.</Text>
                        </FormControl>

                        <Text fontSize='0.8em' color='red' marginLeft='1em'visibility={data !== null && data.isError ? 'visible' : 'hidden'}>Invalid old password.</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button width='6em' colorScheme='red' marginRight='1em' onClick={onClose}>Cancel</Button>
                        <Button width='6em' colorScheme='teal' isDisabled={mismatchPasswords} onClick={confirmHandler}>Confirm</Button>
                    </ModalFooter>

                </ModalContent>
            </Modal>
        </>
    )
}

export default ChangeModal
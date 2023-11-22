import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Text, Button, Divider, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import RequiredInput from './RequiredInput'
import Notification from './Notification'
import librarianService from '../../services/librarian'

const EditBookModal = ({ book, isOpen, onClose }) => {

    const router = useRouter()

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')

    const titleError = title === ''
    const authorError = author === ''
    const urlError = url === ''

    const notiDisclosure = useDisclosure()

    const confirmHandler = () => {
        librarianService.updateBook(book.id, title, author, description, url)

        window.localStorage.setItem('recentlyUpdateBook', true)

        router.reload()
    }

    useEffect(() => {
        setTitle(book.title)
        setAuthor(book.author)
        setDescription(book.description)
        setUrl(book.coverUrl)
    }, [])

    useEffect(() => {
        if (window.localStorage.getItem('recentlyUpdateBook')) {
            window.localStorage.removeItem('recentlyUpdateBook')

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
                    ? <Notification onClose={notiDisclosure.onClose} title={`Success!`} description={`The information for the book has been updated.`}/>
                    : <></>
            }
            <Modal isOpen={isOpen} onClose={onClose} size='3xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontWeight='bold'>Edit book</ModalHeader>
                    <ModalCloseButton />
                    <Divider />

                    <ModalBody>
                        <RequiredInput error={titleError} display='Title' variable={title} setFunction={setTitle}/>
                        <RequiredInput error={authorError} display='Author' variable={author} setFunction={setAuthor}/>

                        <FormLabel marginTop='1em'>Description</FormLabel>
                        <Input id='Description' value={description} onChange={e => setDescription(e.target.value)} maxWidth='100%' overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'></Input>                   
                        <Text fontSize='0.8em' color='red' marginLeft='1em' visibility='hidden'>foo</Text>

                        <RequiredInput error={urlError} display='Url' variable={url} setFunction={setUrl}/>
                    </ModalBody>

                    <ModalFooter>
                        <Button width='6em' colorScheme='red' marginRight='1em' onClick={onClose}>Cancel</Button>
                        <Button width='6em' colorScheme='teal' onClick={confirmHandler} isDisabled={titleError || authorError || urlError}>Confirm</Button>
                    </ModalFooter>

                </ModalContent>
            </Modal>
        </>
    )
}

export default EditBookModal
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import librarianService from '../../services/librarian'
import { Text, Button, Divider, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import RequiredInput from './RequiredInput'

const DashboardEditBookModal = ({ book, isOpen, onClose }) => {

    const router = useRouter()

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')

    const titleError = title === ''
    const authorError = author === ''
    const urlError = url === ''

    const updateHandler = () => {
        librarianService.updateBook(book.id, title, author, description, url)

        window.localStorage.setItem('recentlyUpdateBook', true)

        router.reload()
    }

    useEffect(() => {
        setTitle(book.title)
        setAuthor(book.author)
        setDescription(book.description)
        setUrl(book.coverUrl)
    }, [book])

    return (
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
                    <Button width='6em' colorScheme='teal' onClick={updateHandler} isDisabled={titleError || authorError || urlError}>Confirm</Button>
                </ModalFooter>

            </ModalContent>
        </Modal>
    )
}

export default DashboardEditBookModal
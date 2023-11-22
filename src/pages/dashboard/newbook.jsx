import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Button, Center, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import Header from '@/components/Header'
import RequiredInput from '@/components/RequiredInput'
import librarianService from '../../../services/librarian'


const NewBook = () => {

    const router = useRouter()

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')

    const titleError = title === ''
    const authorError = author === ''
    const urlError = url === ''

    const addHandler = async () => {
        const result = await librarianService.addBook(title, author, description, url)

        router.push(`/book/${result.insertId}`)
    }

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('user')

        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)

            librarianService.setToken(user.token)
        }
    }, [])

    return (
        <>
            <Header />
            <Center width='100%' padding='3em 0' flexDirection='column'>
                <Heading fontSize='1.5em'>Add a new book</Heading>

                <Center width='40%' flexDirection='column'>
                    <RequiredInput error={titleError} display='Title' variable={title} setFunction={setTitle}/>
                    <RequiredInput error={authorError} display='Author' variable={author} setFunction={setAuthor}/>

                    <FormControl>
                        <FormLabel marginTop='1em'>Description</FormLabel>
                        <Input placeholder='Optional' id='Description' value={description} onChange={e => setDescription(e.target.value)} maxWidth='100%' overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'></Input>                   
                        <Text fontSize='0.8em' color='red' marginLeft='1em' visibility='hidden'>foo</Text>
                    </FormControl>

                    <RequiredInput error={urlError} display='Cover Image (url)' variable={url} setFunction={setUrl}/>
                    
                    <Button onClick={addHandler} isDisabled={titleError || authorError || urlError} marginTop='1em' colorScheme='teal' alignSelf='center'>Add a new book</Button>
                </Center>
            </Center>
        </>
    )
}

export default NewBook
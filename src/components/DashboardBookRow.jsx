import { useRouter } from 'next/router'
import { Tr, Td, useDisclosure } from '@chakra-ui/react'
import { IoIosReturnLeft } from 'react-icons/io'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import DashboardEditBookModal from './DashboardEditBookModal'
import DashboardDeleteBookModal from './DashboardDeleteBookModal'
import librarianService from '../../services/librarian'

const DashboardBookRow = ({ no, book }) => {
    
    const router = useRouter()

    const editDisclosure = useDisclosure()
    const deleteDisclosure = useDisclosure()

    const returnHandler = () => {
        librarianService.returnBook(book.id)

        window.localStorage.setItem('recentlyReturnBook', true)

        router.reload()
    }

    return (
        <>
            <Tr>
                <Td maxWidth='0' overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>{no}</Td>
                <Td maxWidth='0' overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>{book.title}</Td>
                <Td maxWidth='0' overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>{book.author}</Td>
                <Td maxWidth='0' overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap' color={book.isAvailable ? 'green' : 'red'}>
                {
                    book.isAvailable
                    ? 'Available'
                    : 'Not Available'
                }
                </Td>
                <Td maxWidth='0' overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>
                    <AiOutlineEdit size='1.5em' cursor='pointer' onClick={editDisclosure.onOpen}/>
                </Td>
                <Td maxWidth='0' overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>
                    <AiOutlineDelete size='1.5em' cursor='pointer' onClick={deleteDisclosure.onOpen}/>
                </Td>
                {
                    book.isAvailable
                    ? <Td>&nbsp;</Td>
                    :   <Td maxWidth='0' overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>
                        <IoIosReturnLeft size='1.5em' cursor='pointer' onClick={returnHandler}/>
                        </Td>
                }
            </Tr>

            <DashboardEditBookModal book={book} isOpen={editDisclosure.isOpen} onClose={editDisclosure.onClose}/>
            <DashboardDeleteBookModal book={book} isOpen={deleteDisclosure.isOpen} onClose={deleteDisclosure.onClose}/>
        </>
    )
}

export default DashboardBookRow
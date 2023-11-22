import { Tr, Td, useDisclosure } from '@chakra-ui/react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import DashboardDeleteUserModal from './DashboardDeleteUserModal'
import DashboardUpdateUserModal from './DashboardUpdateUserModal'

const DashboardUserRow = ({ no, user }) => {
    
    const updateDisclosure = useDisclosure()
    const deleteDisclosure = useDisclosure()

    return (
        <>
            <Tr>
                <Td maxWidth='0' overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>{no}</Td>
                <Td maxWidth='0' overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>{user.username}</Td>
                <Td maxWidth='0' overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>{user.name}</Td>
                <Td maxWidth='0' overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>{user.role}</Td>
                <Td maxWidth='0' overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>{user.fine}</Td>
                <Td maxWidth='0' overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap' color={user.isBorrowable ? 'green' : 'red'}>
                {
                    user.isBorrowable
                    ? 'Eligible'
                    : 'Restricted'
                }
                </Td>
                <Td maxWidth='0' overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>
                    <AiOutlineEdit size='1.5em' cursor='pointer' onClick={updateDisclosure.onOpen}/>
                </Td>
                <Td maxWidth='0' overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>
                    <AiOutlineDelete size='1.5em' cursor='pointer' onClick={deleteDisclosure.onOpen}/>
                </Td>
            </Tr>

            <DashboardUpdateUserModal user={user} isOpen={updateDisclosure.isOpen} onClose={updateDisclosure.onClose} />
            <DashboardDeleteUserModal user={user} isOpen={deleteDisclosure.isOpen} onClose={deleteDisclosure.onClose} />
        </>
    )
}

export default DashboardUserRow
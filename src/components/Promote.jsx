import { Flex, Heading, List, ListItem, Text } from '@chakra-ui/react'
import { IoMdCheckmarkCircle } from 'react-icons/io'
import { promotes } from '@/contents/promote'

const Promote = () => {

    const format = promote => {
        return (
            <ListItem>
                <Flex flexDirection='column'>
                    <Flex alignItems='center'>
                        <IoMdCheckmarkCircle size='1.5em' color='teal'/>
                        <Text fontWeight='bold' fontSize='1.5em'>
                            &nbsp; {promote.topic}
                        </Text>
                    </Flex>
                    <Text>
                        {promote.description}
                    </Text>
                </Flex>
            </ListItem>
        )
    }

    return (
        <Flex flexDirection='column' margin='6em'>
            <Heading fontSize='2em' textAlign='left'>With BookBorrow, you can...</Heading>
            <List spacing='2em' marginTop='2em'>
                { promotes.map(promote => format(promote)) }
            </List>
        </Flex>
    )
}

export default Promote
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Divider, Button, Text, Heading } from '@chakra-ui/react'
import { terms } from '@/contents/terms'

const TermModal = ({ isOpen, onClose }) => {
    
    const format = (rules) => {

        const subFormat = (rule) => {
            return (
                <>
                    <Text as='span' fontWeight='semibold'>{rule.topic}&nbsp;</Text>
                    <Text as='span'>{rule.detail}</Text>

                    <Text>&nbsp;</Text>
                </>
            )
        }

        return (
            <>
                <Heading fontSize='1.2em' fontWeight='bold'>{rules.main}</Heading>
                { rules.sub.map(rule => subFormat(rule)) }
            </>
        )
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size='3xl' scrollBehavior='inside'>
            <ModalOverlay />
            <ModalContent>

                <ModalHeader fontWeight='bold'>Terms of Service</ModalHeader>
                <ModalCloseButton />
                <Divider />

                <ModalBody>
                    <Text>{terms.header}</Text>

                    <Text>&nbsp;</Text>

                    { terms.rules.map((rules, id) => format(rules, id)) }

                    <Text>{terms.footer}</Text>
                </ModalBody>
                <Divider />

                <ModalFooter>
                    <Text>Last Update: {terms.lastUpdate}</Text>
                </ModalFooter>

            </ModalContent>
        </Modal>
    )
}

export default TermModal
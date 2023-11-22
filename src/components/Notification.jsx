import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton } from '@chakra-ui/react'

const Notification = ({ onClose, title, description }) => {
    
    return (
        <Alert status='success' position='fixed' bottom='2em' left='2em' width='auto' borderRadius='0.5em'>
            <AlertIcon />
            <Box>
                <AlertTitle>{title}</AlertTitle>
                <AlertDescription>
                    {description}
                </AlertDescription>
            </Box>
            <CloseButton
                alignSelf='flex-start'
                position='relative'
                right={-1}
                top={-1}
                onClick={onClose}
            />
        </Alert>
    )
}

export default Notification

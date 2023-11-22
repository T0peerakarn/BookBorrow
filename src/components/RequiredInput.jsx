
import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react'

const RequiredInput = ({ error, display, variable, setFunction}) => {
    return (
        <FormControl isInvalid={error}>
            <FormLabel marginTop='1em'>{display}</FormLabel>
            <Input id={display} value={variable} onChange={e => setFunction(e.target.value)} maxWidth='100%' overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'></Input>                   
            <Text fontSize='0.8em' color='red' marginLeft='1em' visibility={error ? 'visible' : 'hidden'}>{display} is required.</Text>
        </FormControl>
    )
}

export default RequiredInput
import { Container, InputGroup, Input, InputRightElement } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import Link from 'next/link'
import { useRouter } from 'next/router'

const SearchBar = ({ search, setSearch }) => {
    const router = useRouter()

    const onKeyDownHandler = e => {
        if (e.keyCode === 13) {
            router.push(`/search?search=${search}`)
        }
    }

    return (
        <Container padding='3em 1em 0 1em'>
            <InputGroup>
                <Input size='lg' placeholder='Find your books' onChange={e => setSearch(e.target.value)} value={search} onKeyDown={onKeyDownHandler}/>
                <InputRightElement height='100%'>
                    {
                        search === ''
                        ? <FiSearch cursor='pointer' />
                        : <Link href={`/search?search=${search}`}><FiSearch /></Link>
                    }
                </InputRightElement>
            </InputGroup> 
        </Container>
    )
}

export default SearchBar
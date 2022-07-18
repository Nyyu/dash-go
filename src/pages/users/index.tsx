import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react"
import Link from "next/link"
import { RiAddLine, RiPencilLine } from "react-icons/ri"
import Header from "../../components/Header"
import Pagination from "../../components/Pagination"
import Sidebar from "../../components/Sidebar"

function ListagemUsuarios() {
  const isWide = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' mx='auto' maxWidth={1480} px={['4', '6']}>
        <Sidebar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex justify='space-between' align='center' mb='8'>
            <Heading fontWeight='normal' size='lg'>
              Users
            </Heading>


            <Link href='/users/create'>
              <Button
                as='a'
                size='sm'
                fontSize='sm'
                colorScheme='pink'
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
              >
                Add user
              </Button>
            </Link>
          </Flex>

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px={['4', '6']} color='gray.300' w='8'>
                  <Checkbox colorScheme='pink' />
                </Th>

                <Th>User</Th>

                {isWide && <Th>Timestamp</Th>}

                <Th w='8' />
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px={['4', '6']} color='gray.300' w='8'>
                  <Checkbox colorScheme='pink' />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight='bold'>NyuuSz</Text>
                    <Text color='gray.300' fontSize='sm'>nyyu.dev@gmail.com</Text>
                  </Box>
                </Td>

                {isWide && <Td>
                  04 de Abril, 2022
                </Td>}

                <Td>
                  <Button
                    size='sm'
                    fontSize='sm'
                    colorScheme='gray'
                    color='gray.400'
                    leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                  >
                    {isWide && "Edit"}
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}

export default ListagemUsuarios
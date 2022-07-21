import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { RiAddLine } from "react-icons/ri"
import Header from "../../components/Header"
import Pagination from "../../components/Pagination"
import Sidebar from "../../components/Sidebar"

import {
  getUsers,
  useUsers,
} from "../../services/hooks/useUsers"

function ListagemUsuarios() {
  const { data, isLoading, error, refetch, isFetching } =
    useQuery(["users"], getUsers, {
      staleTime: 1000 * 25, // 25 seconds
    })
  const isWide = useBreakpointValue({
    base: false,
    lg: true,
  })

  const temp = useUsers()
  return (
    <Box>
      <Header />

      <Flex
        w="100%"
        my="6"
        mx="auto"
        maxWidth={1480}
        px={["4", "6"]}
      >
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex
            justify="space-between"
            align="center"
            mb="8"
          >
            <Heading fontWeight="normal" size="lg">
              Users
              {!isLoading && isFetching && (
                <Spinner
                  size="sm"
                  ml="4"
                  color="gray.500"
                />
              )}
            </Heading>

            <Button
              size="sm"
              fontSize="sm"
              colorScheme="gray"
              color="gray.400"
              onClick={() => refetch()}
            >
              Reload
            </Button>

            <Link href="/users/create">
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={
                  <Icon as={RiAddLine} fontSize="20" />
                }
              >
                Add user
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center" align="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center" align="center">
              <Text>Unable to fetch data</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th
                      px={["4", "6"]}
                      color="gray.300"
                      w="8"
                    >
                      <Checkbox colorScheme="pink" />
                    </Th>

                    <Th>User</Th>

                    {isWide && <Th>Timestamp</Th>}
                  </Tr>
                </Thead>

                <Tbody>
                  {data instanceof Array &&
                    data.map((item: any) => (
                      <Tr key={item.id}>
                        <Td
                          px={["4", "6"]}
                          color="gray.300"
                          w="8"
                        >
                          <Checkbox colorScheme="pink" />
                        </Td>

                        <Td>
                          <Box>
                            <Text fontWeight="bold">
                              {item.name}
                            </Text>
                            <Text
                              color="gray.300"
                              fontSize="sm"
                            >
                              {item.email}
                            </Text>
                          </Box>
                        </Td>

                        {isWide && (
                          <Td>{item.createdAt}</Td>
                        )}
                      </Tr>
                    ))}
                </Tbody>
              </Table>

              <Pagination
                totalCountOfRegisters={200}
                currentPage={19}
                onPageChange={() => {}}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}

export default ListagemUsuarios

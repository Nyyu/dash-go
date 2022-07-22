import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  HStack,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import NextLink from "next/link"
import { useState } from "react"
import { RiAddLine } from "react-icons/ri"
import Header from "../../components/Header"
import Pagination from "../../components/Pagination"
import Sidebar from "../../components/Sidebar"
import { api } from "../../services/api"

import {
  getUsers,
  Users,
  useUsers,
} from "../../services/hooks/useUsers"
import { queryClient } from "../../services/QueryClient"

import { v4 as uuid } from "uuid"
import { GetServerSideProps } from "next"

function ListagemUsuarios({ users }: any) {
  const [page, setPage] = useState(1)

  const { data, isLoading, error, refetch, isFetching } =
    useQuery(["users", page], () => getUsers(page), {
      staleTime: 1000 * 25, // 25 seconds
      initialData: users,
    })
  const isWide = useBreakpointValue({
    base: false,
    lg: true,
  })

  async function handleUserPrefetch(id: number) {
    await queryClient.prefetchQuery(
      ["user", id],
      async () => {
        const { data } = await api.get(`/users/${id}`)
        return data
      },
      {
        staleTime: 1000 * 60 * 5, // 5 minutes
      }
    )
  }

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

            <HStack>
              <Button
                size="sm"
                fontSize="sm"
                colorScheme="gray"
                color="gray.400"
                onClick={() => refetch()}
              >
                Reload
              </Button>

              <NextLink href="/users/create">
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
              </NextLink>
            </HStack>
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
                  {data?.users instanceof Array &&
                    data?.users.map((item: Users) => (
                      <Tr key={item?.id ?? uuid()}>
                        <Td
                          px={["4", "6"]}
                          color="gray.300"
                          w="8"
                        >
                          <Checkbox colorScheme="pink" />
                        </Td>

                        <Td>
                          <Link
                            onMouseEnter={() =>
                              handleUserPrefetch(+item.id)
                            }
                          >
                            <Text fontWeight="bold">
                              {item.nome}
                            </Text>
                            <Text
                              color="gray.300"
                              fontSize="sm"
                            >
                              {item.email}
                            </Text>
                          </Link>
                        </Td>

                        {isWide && (
                          <Td>{item.createdAt}</Td>
                        )}
                      </Tr>
                    ))}
                </Tbody>
              </Table>

              <Pagination
                totalCountOfRegisters={
                  data?.totalCount ?? 0
                }
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps =
  async () => {
    const { users } = await getUsers(1)

    return {
      props: {
        users,
      },
    }
  }

export default ListagemUsuarios

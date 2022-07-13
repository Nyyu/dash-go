import { Button, Flex, Stack } from "@chakra-ui/react"
import type { NextPage } from 'next'
import Input from "../components/Form/Input"

const Home: NextPage = () => {
  return (
    <Flex
      justify="center"
      align="center"
      w="100vw"
      h="100vh"
    >
      <Flex
        as="form"
        w="100%"
        maxWidth="360px"
        p="8"
        bg="gray.800"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing={4} >
          <Input name="email" label="Email" type="email" />
          <Input name="password" label="Password" type="password" />
        </Stack>
        <Button
          type="submit"
          colorScheme="pink"
          mt="6"
          size="lg"
        >Entrar</Button>
      </Flex>
    </Flex>
  )
}

export default Home

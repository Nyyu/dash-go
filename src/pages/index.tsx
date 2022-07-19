import { Button, Flex, Stack } from "@chakra-ui/react"
import type { NextPage } from "next"
import Link from "next/link"
import {
  FieldError,
  SubmitHandler,
  useForm,
} from "react-hook-form"
import Input from "../components/Form/Input"

import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

type TFormData = {
  email?: string
  password?: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().email("Email invalid").required(),
  password: yup.string().required(),
})

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(signInFormSchema),
  })

  // Eu lhe apresento gambiarra, agora meu typescript para de chora
  const { email, password } = errors as unknown as {
    email: FieldError
    password: FieldError
  }

  const handleLogin: SubmitHandler<TFormData> = async (
    values
  ) => {
    await new Promise((resolve) =>
      setTimeout(resolve, 2000)
    )
    console.log(values)
  }

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
        onSubmit={handleSubmit(handleLogin)}
      >
        <Stack spacing={4}>
          <Input
            name="email"
            label="Email"
            type="email"
            error={email}
            reg={register}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            error={password}
            reg={register}
          />
        </Stack>

        <Button
          type="submit"
          colorScheme="pink"
          mt="6"
          size="lg"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

export default Home

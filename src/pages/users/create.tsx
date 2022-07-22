import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react"
import Link from "next/link"
import React from "react"
import Input from "../../components/Form/Input"
import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"

import { v4 as uuid } from "uuid"

import * as yup from "yup"
import {
  FieldError,
  SubmitHandler,
  useForm,
} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useMutation } from "@tanstack/react-query"
import { api } from "../../services/api"
import { queryClient } from "../../services/QueryClient"
import { useRouter } from "next/router"

type TFormData = {
  nome?: string
  email?: string
  password?: string
  confirm_password?: string
}

const formDataSchema = yup.object().shape({
  nome: yup.string().required(), // Required()
  email: yup.string().email("Email invalid").required(),
  password: yup
    .string()
    .min(6, "Needs at least 6 char")
    .required(),
  confirm_password: yup
    .string()
    .oneOf(
      [null, yup.ref("password")],
      "Password needs to match"
    )
    .required(),
})

export default function CreateUser() {
  const router = useRouter()

  const createUser = useMutation(
    async (user: TFormData) => {
      const response = await api.post("users", {
        user: {
          id: uuid(),
          ...user,
          created_at: new Date(),
        },
      })

      return response.data.user
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(["users"])
        router.push("/users")
      },
    }
  )
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(formDataSchema),
  })

  const { nome, email, password, confirm_password } =
    errors as unknown as {
      nome: FieldError
      email: FieldError
      password: FieldError
      confirm_password: FieldError
    }

  const submitForm: SubmitHandler<TFormData> = async (
    userData
  ) => {
    await createUser.mutateAsync(userData)
  }

  return (
    <Box>
      <Header />

      <Flex
        w="100%"
        my="6"
        mx="auto"
        maxWidth={1480}
        px="6"
      >
        <Sidebar />

        <Box
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          as="form"
          onSubmit={handleSubmit(submitForm)}
        >
          <Heading fontWeight="normal" size="lg">
            Usuarios
          </Heading>

          <Divider borderColor="gray.700" my="6" />

          <VStack>
            <SimpleGrid
              minChildWidth="240px"
              w="100%"
              spacing={["6", "8"]}
            >
              <Input
                label="Nome completo"
                error={nome}
                name={"nome"}
                reg={register}
              />
              <Input
                label="Email"
                type="email"
                error={email}
                name={"email"}
                reg={register}
              />
            </SimpleGrid>

            <SimpleGrid
              minChildWidth="240px"
              w="100%"
              spacing={["6", "8"]}
            >
              <Input
                label="Senha"
                type="password"
                error={password}
                name={"password"}
                reg={register}
              />
              <Input
                label="Confirmar senha"
                type="password"
                error={confirm_password}
                name={"confirm_password"}
                reg={register}
              />
            </SimpleGrid>
          </VStack>

          <Flex justify="flex-end" gap="4" mt={["6", "8"]}>
            <Link href="/users">
              <Button colorScheme="whiteAlpha">
                Cancelar
              </Button>
            </Link>
            <Button
              type="submit"
              isLoading={isSubmitting}
              colorScheme="pink"
            >
              Salvar
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

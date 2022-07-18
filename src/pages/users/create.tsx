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

import * as yup from "yup"
import {
  FieldError,
  SubmitHandler,
  useForm,
} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

type TFormData = {
  nome: string
  email: string
  password: string
  confirm_password: string
}

const formDataSchema = yup.object().shape({
  nome: yup.string().required(),
  email: yup.string().required().email("Email invalid"),
  password: yup
    .string()
    .required()
    .min(6, "Needs at least 6 char"),
  confirm_password: yup
    .string()
    .oneOf(
      [null, yup.ref("password")],
      "Password needs to match"
    ),
})

export default function CreateUser() {
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

  const submitForm: SubmitHandler<TFormData> = (event) => {
    console.log(event)
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
                {...register("nome")}
                label="Nome completo"
                name="nome"
                error={nome}
              />
              <Input
                label="Email"
                name="email"
                type="email"
                error={email}
              />
            </SimpleGrid>

            <SimpleGrid
              minChildWidth="240px"
              w="100%"
              spacing={["6", "8"]}
            >
              <Input
                label="Senha"
                name="password"
                type="password"
                error={password}
              />
              <Input
                label="Confirmar senha"
                name="confirm_password"
                type="password"
                error={confirm_password}
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

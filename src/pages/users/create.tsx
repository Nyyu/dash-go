import { Box, Button, Divider, Flex, Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import React from 'react'
import Input from '../../components/Form/Input'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' mx='auto' maxWidth={1480} px='6'>
        <Sidebar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Heading fontWeight='normal' size='lg'>
            Usuarios
          </Heading>

          <Divider borderColor='gray.700' my='6' />

          <VStack>
            <SimpleGrid minChildWidth='240px' w='100%' spacing='8' >
              <Input label='Nome completo' name='name' />
              <Input label='Email' name='email' type='email' />
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' w='100%' spacing='8' >
              <Input label='Senha' name='password' type='password' />
              <Input label='Confirmar senha' name='password' type='password' />
            </SimpleGrid>
          </VStack>

          <Flex justify='flex-end' gap='4' mt='8'>
            <Button
              colorScheme='whiteAlpha'
            >
              Cancelar
            </Button>
            <Button
              colorScheme='pink'
            >
              Salvar
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

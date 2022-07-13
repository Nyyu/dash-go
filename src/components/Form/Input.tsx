import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react"
import React from 'react'

interface InputProps extends ChakraInputProps {
  name: string
  label: string
}

function Input({ name, label }: InputProps) {
  return (
    <FormControl>
      {!!label && (
        <FormLabel htmlFor={name} >{label}</FormLabel>
      )}
      <ChakraInput
        name={name}
        id={name}
        variant="filled"
        bg="gray.900"
        focusBorderColor="pink.500"
        size="lg"
        _hover={{
          bg: "gray.900"
        }}
      />
    </FormControl>
  )
}

export default Input
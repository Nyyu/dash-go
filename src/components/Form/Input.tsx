import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  forwardRef,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react"

import { FieldError } from "react-hook-form"
import React, { ForwardRefRenderFunction } from "react"

interface InputProps extends ChakraInputProps {
  name: string
  label: string
  error?: FieldError | null
  reg: any
}

const InputRaw: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ name, label, error = null, reg, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && (
        <FormLabel>{label}</FormLabel>
      )}
      <ChakraInput
        variant="filled"
        bg="gray.900"
        focusBorderColor="pink.500"
        size="lg"
        _hover={{
          bg: "gray.900",
        }}
        {...reg(name)}
      />

      {!!error && (
        <FormErrorMessage>{error.message}</FormErrorMessage>
      )}
    </FormControl>
  )
}

const Input = forwardRef(InputRaw)

export default Input

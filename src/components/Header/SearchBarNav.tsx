import { Flex, Icon, Input } from '@chakra-ui/react'
import React from 'react'
import { RiSearchLine } from 'react-icons/ri'

export default function SearchBarNav() {
  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      borderRadius="full"
      color="gray.200"
      bg="gray.800"
      position="relative"
    >
      <Input
        variant="unstyled"
        color="gray.50"
        px="4"
        mr="4"
        placeholder="Search"
        _placeholder={{
          color: "gray.400"
        }}
      />
      <Icon
        as={RiSearchLine}
        fontSize="20"
      />
    </Flex>
  )
}

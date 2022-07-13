import { Flex, Icon, Input, Text } from "@chakra-ui/react"
import { RiSearchLine } from 'react-icons/ri'

function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        dashgo
        <Text as="span" color="pink.500" ml="1">
          .
        </Text>
      </Text>

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
    </Flex>
  )
}

export default Header
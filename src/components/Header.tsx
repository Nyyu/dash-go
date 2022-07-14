import { Flex, Icon, Input, Text, Avatar, HStack, Box } from "@chakra-ui/react"
import { RiSearchLine, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

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

      <Flex
        align="center"
        ml="auto"
      >
        <HStack
          spacing='8'
          mx="8"
          pr="8"
          py="1"
          borderRight={1}
          borderColor='gray.700'
          color="gray.300"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex
          align='center'
        >
          <Box mr='4' textAlign='right' >
            <Text>NyuuSz</Text>
            <Text color='gray.300' fontSize='small' >nyyu.dev@gmail.com</Text>
          </Box>
          <Avatar size='md' name="NyuuSz" src="https://github.com/Nyyu.png" />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header
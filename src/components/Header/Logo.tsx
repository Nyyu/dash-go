import { Text } from "@chakra-ui/react"

function Logo() {
  return (
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
  )
}

export default Logo
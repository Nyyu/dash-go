import { Text } from "@chakra-ui/react"
import Link from "next/link"

function Logo() {
  return (
    <Link href="/">
      <Text
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
        as='a'
      >
        dashgo
        <Text as="span" color="pink.500" ml="1">
          .
        </Text>
      </Text>
    </Link>
  )
}

export default Logo
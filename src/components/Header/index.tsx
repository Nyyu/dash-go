import { Flex } from "@chakra-ui/react"
import Logo from "./Logo"
import NotificationsNav from "./NotificationsNav"
import SearchBarNav from "./SearchBarNav"
import UserNav from "./UserNav"

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
      <Logo />
      <SearchBarNav />

      <Flex
        align="center"
        ml="auto"
      >
        <NotificationsNav />
        <UserNav />
      </Flex >
    </Flex>
  )
}

export default Header
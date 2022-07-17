import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react"
import { RiMenuLine } from "react-icons/ri"
import { useSidebarDrawer } from "../../context/SidebarDrawerContext"
import Logo from "./Logo"
import NotificationsNav from "./NotificationsNav"
import SearchBarNav from "./SearchBarNav"
import UserNav from "./UserNav"

function Header() {
  const { onOpen } = useSidebarDrawer()
  const isCurrentViewWide = useBreakpointValue({
    base: false,
    lg: true
  })

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
      {(!isCurrentViewWide && (
        <IconButton
          onClick={onOpen}
          aria-label="open sidebar"
          icon={<Icon as={RiMenuLine} />}
          variant='unstyled'
          fontSize='24'
          mr='2'
          mt='2'
        />
      ))}

      <Logo />
      {isCurrentViewWide && <SearchBarNav />}

      <Flex
        align="center"
        ml="auto"
      >
        <NotificationsNav />
        <UserNav showProfileDetails={isCurrentViewWide} />
      </Flex >
    </Flex>
  )
}

export default Header
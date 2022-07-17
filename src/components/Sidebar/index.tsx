import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react"
import { useEffect } from "react"

import { useSidebarDrawer } from "../../context/SidebarDrawerContext"
import SideBarNav from "./SideBarNav"

export default function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer()
  const isOnSmallScreen = useBreakpointValue({
    base: true,
    lg: false
  })

  useEffect(() => {
    console.log(isOpen)
  }, [isOpen])

  if (
    isOnSmallScreen
  ) {
    return (
      <Drawer isOpen={isOpen} onClose={onClose} placement="left" >
        <DrawerOverlay />
        <DrawerContent bg="gray.800" p='4'>
          <DrawerCloseButton mt='6' />
          <DrawerHeader>Navegação</DrawerHeader>
          <DrawerBody>
            <SideBarNav />
          </DrawerBody>
        </DrawerContent>
      </Drawer >
    )
  }

  return (
    <Box
      as='aside'
      w='64'
      mr='8'
    >
      <SideBarNav />
    </Box>
  )
}

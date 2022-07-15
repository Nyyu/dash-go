import { Box, Stack } from "@chakra-ui/react"
import React from 'react'
import { RiContactsLine, RiDashboardLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri"
import SideBarLink from "./SideBarLink"
import SideBarSection from "./SideBarSection"

export default function Sidebar() {
  return (
    <Box
      as='aside'
      w='64'
      mr='8'
    >
      <Stack align='flex-start' spacing='12'>
        <SideBarSection title='GENERAL'>
          <SideBarLink icon={RiDashboardLine} title='Dashboard' />
          <SideBarLink icon={RiContactsLine} title='Users' />
        </SideBarSection>

        <SideBarSection title='AUTOMATION'>
          <SideBarLink icon={RiInputMethodLine} title='Forms' />
          <SideBarLink icon={RiGitMergeLine} title='Automation' />
        </SideBarSection>
      </Stack>
    </Box>
  )
}

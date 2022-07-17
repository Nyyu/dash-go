import { Stack } from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"
import SideBarLink from "./SideBarLink"
import SideBarSection from "./SideBarSection"

export default function SideBarNav() {
  return (
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
  )
}

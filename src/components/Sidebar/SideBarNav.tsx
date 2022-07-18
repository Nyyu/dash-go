import { Stack } from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"
import SideBarLink from "./SideBarLink"
import SideBarSection from "./SideBarSection"

export default function SideBarNav() {
  return (
    <Stack align='flex-start' spacing='12'>
      <SideBarSection title='GENERAL'>
        <SideBarLink href="/dashboard" icon={RiDashboardLine} title='Dashboard' />
        <SideBarLink href="/users" icon={RiContactsLine} title='Users' />
      </SideBarSection>

      <SideBarSection title='AUTOMATION'>
        <SideBarLink href="/forms" icon={RiInputMethodLine} title='Forms' />
        <SideBarLink href="/automation" icon={RiGitMergeLine} title='Automation' />
      </SideBarSection>
    </Stack>
  )
}

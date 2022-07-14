import { Stack } from '@chakra-ui/react'
import { RiAccountCircleLine, RiProfileLine, RiUserAddLine, RiUserLine } from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="Accounts">
        <NavLink href="/accounts" icon={RiAccountCircleLine}>
          Accounts
        </NavLink>
        <NavLink href="/accounts/create" icon={RiUserAddLine}>
          Create
        </NavLink>
      </NavSection>
      <NavSection title="User">
        <NavLink href="/users/profile" icon={RiProfileLine}>
          Profile
        </NavLink>
      </NavSection>
    </Stack>
  )
}

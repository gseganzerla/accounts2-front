import { Stack } from '@chakra-ui/react'
import { RiAccountCircleLine, RiUserAddLine } from 'react-icons/ri'
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
      {/* <NavSection title="User">
        <NavLink href="/forms" icon={RiInputMethodLine}>
          Profile
        </NavLink>
      </NavSection> */}
    </Stack>
  )
}

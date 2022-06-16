import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { signOut } from '../../contexts/AuthContext'

interface MenuProfileProps {
  children: ReactNode
}

export function MenuProfile({ children }: MenuProfileProps) {
  function handleSignOut() {
    signOut()
  }

  return (
    <Menu autoSelect={false}>
      <MenuButton transition="all 0.2s">{children}</MenuButton>
      <MenuList bg="gray.800" borderColor="pink.500">
        <MenuItem
          _hover={{
            bg: 'pink.500',
          }}
        >
          Profile
        </MenuItem>
        <MenuItem
          _hover={{
            bg: 'pink.500',
          }}
          onClick={handleSignOut}
        >
          Sign Out
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

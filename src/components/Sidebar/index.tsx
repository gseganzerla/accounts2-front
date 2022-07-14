import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react'
import { useSidebarDrawer } from '../../contexts/SidebarDrawer'
import { useWideVersion } from '../../hooks/useWideVersion'
import { SidebarNav } from './SidebarNav'

export function Sidebar() {
  const isSidebarDrawer = !useWideVersion()

  const { isOpen, onClose } = useSidebarDrawer()

  if (isSidebarDrawer) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800">
            <DrawerCloseButton />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  )
}

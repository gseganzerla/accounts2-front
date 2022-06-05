import { Box, useBreakpointValue } from '@chakra-ui/react'
import { SidebarNav } from './SidebarNav'

export function Sidebar() {
  const isSidebarDrawer = useBreakpointValue({
    base: true,
    lg: false,
  })

  // if (isSidebarDrawer) {
  //   return (
  //     <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
  //       <DrawerOverlay>
  //         <DrawerContent bg="gray.800">
  //           <DrawerCloseButton />
  //           <DrawerHeader>Navegação</DrawerHeader>
  //           <DrawerBody>
  //             <SidebarNav />
  //           </DrawerBody>
  //         </DrawerContent>
  //       </DrawerOverlay>
  //     </Drawer>
  //   )
  // }

  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  )
}

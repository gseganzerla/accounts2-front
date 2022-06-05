import { Flex, Icon, IconButton as ChakraIconButton } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawer'
import { useWideVersion } from '../../hooks/useWideVersion'
import { Logo } from './Logo'
import { Profile } from './Profile'

export function Header() {
  const isWideVersion = useWideVersion()

  const { onOpen } = useSidebarDrawer()

  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      mt="4"
      px="6"
      maxW={1480}
      justify="space-between"
    >
      {!isWideVersion && (
        <ChakraIconButton
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          mr="2"
          onClick={onOpen}
        ></ChakraIconButton>
      )}
      <Logo />

      <Profile showProfileData={isWideVersion} />
    </Flex>
  )
}

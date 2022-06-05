import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { Logo } from './Logo'
import { Profile } from './Profile'

export function Header() {
  const isWideVersion = useBreakpointValue({ base: false, md: true })

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
      <Logo />

      <Profile showProfileData={isWideVersion} />
    </Flex>
  )
}

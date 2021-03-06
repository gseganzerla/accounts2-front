import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import { useAuth } from '../../contexts/AuthContext'
import { MenuProfile } from './MenuProfile'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  const { user } = useAuth()

  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>{user.name}</Text>
          <Text color="gray.300" fontSize="smal">
            {user.email}
          </Text>
        </Box>
      )}
      <MenuProfile>
        <Avatar size="md" name={user.name} />
      </MenuProfile>
    </Flex>
  )
}

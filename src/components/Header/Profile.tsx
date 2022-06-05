import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Guilherme Seganzerla</Text>
        <Text color="gray.300" fontSize="smal">
          g.seganzerla@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Guilherme Seganzerla" />
    </Flex>
  )
}

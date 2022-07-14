import { Text } from '@chakra-ui/react'

export function Logo() {
  return (
    <Text fontWeight="bold" fontSize={['2xl', '3xl']}>
      Accounts
      <Text as="span" ml="1" fontSize="lg" color="pink.500">
        2
      </Text>
    </Text>
  )
}

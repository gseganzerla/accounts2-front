import { Box, Button, Flex, Stack } from '@chakra-ui/react'
import { Input } from '../../components/Form/Input'

export default function Login() {
  return (
    <Flex w="100wh" h="100vh" align="center" justify="center">
      <Box bg="gray.800" p="8" borderRadius="5">
        <Stack spacing="4">
          <Input name="email" label="Email" />
          <Input name="password" label="Password" type="password" />
        </Stack>

        <Button mt="8" w="100%">
          Login
        </Button>
      </Box>
    </Flex>
  )
}

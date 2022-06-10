import { Box, Button, Flex, Stack } from '@chakra-ui/react'
import { FormEvent, useState } from 'react'
import { Input } from '../../components/Form/Input'
import { useAuth } from '../../contexts/AuthContext'
import { withSSRGuest } from '../../utils/withSSRGuest'

export default function Login() {
  const [email, setEmail] = useState('fake@email.com')
  const [password, setPassword] = useState('password')

  const { signIn } = useAuth()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    signIn({ email, password })
  }

  return (
    <Flex w="100wh" h="100vh" align="center" justify="center">
      <Box
        bg="gray.800"
        p="8"
        borderRadius="5"
        as="form"
        onSubmit={handleSubmit}
      >
        <Stack spacing="4">
          <Input
            name="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Stack>

        <Button type="submit" mt="8" w="100%">
          Login
        </Button>
      </Box>
    </Flex>
  )
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  }
})

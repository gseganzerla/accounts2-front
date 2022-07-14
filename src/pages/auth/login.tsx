import { Box, Button, Flex, Stack } from '@chakra-ui/react'
import Link from 'next/link'
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

        <Stack mt="8" spacing="4">
          <Button type="submit">Login</Button>
          <Link href="/auth/register" passHref>
            <Button as="a" variant="link">Sign up</Button>
          </Link>
        </Stack>
      </Box>
    </Flex>
  )
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  }
})

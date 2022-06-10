import { Box, Button, Flex, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { Input } from '../../components/Form/Input'
import { useAuth } from '../../contexts/AuthContext'
import { withSSRGuest } from '../../utils/withSSRGuest'

export default function Register() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const { register } = useAuth()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    register({ email, password, name })
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
            name="name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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
          <Button type="submit">Register</Button>
          <Link href="/auth/login" passHref>
            <Button as="a" variant="link">
              Sign In
            </Button>
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

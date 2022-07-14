import { Box, Button, Heading, Stack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '../../components/Form/Input'
import { Page } from '../../components/Page'
import { StackedButtonGroup } from '../../components/StackedButtonGroup'
import { useAuth } from '../../contexts/AuthContext'
import { useAsyncMutation } from '../../hooks/useAsyncMutation'
import { updateUser } from '../../services/user'
import { User } from '../../types/userTypes'

export default function Profile() {
  const { register, handleSubmit, setValue } = useForm<User>()
  const { user, setUser } = useAuth()
  const { mutateAsync, isLoading: isMutationLoading } = useAsyncMutation({
    fn: updateUser,
    query: 'user',
  })

  useEffect(() => {
    setValue('email', user.email)
    setValue('name', user.name)
  }, [user, setValue])

  async function handleUpdateUser(data: User) {
    data.identify = user.identify

    setUser(await mutateAsync(data))
  }

  return (
    <Page>
      <>
        <Heading>User Information </Heading>

        <Box as="form" onSubmit={handleSubmit(handleUpdateUser)}>
          <Stack mt="8" spacing="4">
            <Input {...register('name')} label="Name" type="text" />
            <Input {...register('email')} label="Email" type="email" />
          </Stack>

          <StackedButtonGroup>
            <Button type="submit" isLoading={isMutationLoading}>
              Save
            </Button>
          </StackedButtonGroup>
        </Box>
      </>
    </Page>
  )
}

import { Box, Button, Divider, Heading, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Input } from '../../components/Form/Input'
import { Page } from '../../components/Page'
import { StackedButtonGroup } from '../../components/StackedButtonGroup'
import { useAsyncMutation } from '../../hooks/useAsyncMutation'
import { AccountFormData, storeAccount } from '../../services/account'

export default function CreateAccount() {
  const { register, handleSubmit } = useForm<AccountFormData>()

  const { mutateAsync, isLoading } = useAsyncMutation({
    fn: storeAccount,
    query: 'accounts',
    redirect: '/accounts',
  })

  function handleStoreTask(data: AccountFormData) {
    mutateAsync(data)
  }

  return (
    <Page>
      <>
        <Heading>Create Account</Heading>

        <Divider my="8" color="gray.700" />

        <Box as="form" onSubmit={handleSubmit(handleStoreTask)}>
          <Stack spacing="4">
            <Input label="Username" {...register('username')} name="username" />
            <Input
              type="email"
              label="Email"
              {...register('email')}
              name="email"
            />
            <Input
              type="password"
              label="Password"
              {...register('password')}
              name="password"
            />
            <Input label="Account" {...register('account')} name="account" />
          </Stack>

          <StackedButtonGroup>
            <Button type="submit" isLoading={isLoading}>
              Store
            </Button>
            <Link href="/accounts" passHref>
              <Button colorScheme="whiteAlpha">Cancel</Button>
            </Link>
          </StackedButtonGroup>
        </Box>
      </>
    </Page>
  )
}

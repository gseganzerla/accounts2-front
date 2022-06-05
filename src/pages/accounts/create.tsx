import { Button, Divider, Heading, Stack } from '@chakra-ui/react'
import { Input } from '../../components/Form/Input'
import { Page } from '../../components/Page'
import { StackedButtonGroup } from '../../components/StackedButtonGroup'

export default function CreateAccount() {
  return (
    <Page>
      <>
        <Heading size="md">Create Account</Heading>

        <Divider my="8" color="gray.700" />

        <Stack spacing="4">
          <Input name="username" label="Username" />
          <Input type="email" name="email" label="Email" />
          <Input type="password" name="password" label="Password" />
          <Input name="account" label="Account" />
        </Stack>

        <StackedButtonGroup>
          <Button type="submit">Store</Button>
          <Button colorScheme="whiteAlpha">Cancel</Button>
        </StackedButtonGroup>
      </>
    </Page>
  )
}

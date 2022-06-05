import { Button, Heading, Stack } from '@chakra-ui/react'
import { Input } from '../../components/Form/Input'
import { Page } from '../../components/Page'
import { StackedButtonGroup } from '../../components/StackedButtonGroup'

export default function Profile() {
  return (
    <Page>
      <>
        <Heading>User Information</Heading>

        <Stack mt="8">
          <Input name="email" label="Email" type="email" />
        </Stack>

        <StackedButtonGroup>
          <Button type="submit">Save</Button>
        </StackedButtonGroup>
      </>
    </Page>
  )
}

import {
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { Page } from '../../components/Page'
import { fetchAccounts } from '../../services/account'

export default function Index() {
  const { isLoading, data: accounts } = useQuery('accounts', fetchAccounts)
  console.log(accounts?.length)

  return (
    <Page>
      <>
        <Flex justify="space-between" mb="8" align="center">
          <Heading>Accounts</Heading>
          {/* <Link href="/accounts/create" passHref>
            <IconButton as="a" icon={RiAddLine}>
              New Account
            </IconButton>
          </Link> */}
        </Flex>

        <Table>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Username</Th>
              <Th>Email</Th>
              <Th>Account</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {accounts?.map((account) => (
              <Tr key={account.uuid}>
                <Td>{account.username}</Td>
                <Td>{account.email}</Td>
                <Td>{account.account}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </>
    </Page>
  )
}

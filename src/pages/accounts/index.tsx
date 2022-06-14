import {
  ButtonGroup,
  Flex,
  Heading,
  Spinner,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { RiClipboardLine, RiEditLine } from 'react-icons/ri'
import { useQuery } from 'react-query'
import { IconButton } from '../../components/IconButton'
import { Page } from '../../components/Page'
import { fetchAccounts } from '../../services/account'

export default function Index() {
  const {
    isLoading,
    isFetching,
    data: accounts,
  } = useQuery('accounts', fetchAccounts)

  return (
    <Page>
      <>
        <Flex justify="space-between" mb="8" align="center">
          <Heading>
            Accounts
            {!isLoading && isFetching && <Spinner color="gray.500" ml="4" />}
          </Heading>
          {/* <Link href="/accounts/create" passHref>
            <IconButton as="a" icon={RiAddLine}>
              New Account
            </IconButton>
          </Link> */}
        </Flex>

        {isLoading ? (
          <Flex justify="center">
            <Spinner size="lg" />
          </Flex>
        ) : (
          <Table>
            <Thead>
              <Tr>
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

                  <Td>
                    <ButtonGroup size="sm" isAttached>
                      <IconButton icon={RiClipboardLine} colorScheme="yellow">
                        Copy
                      </IconButton>
                      {/* <IconButton icon={RiEditLine} colorScheme="blue">
                      Edit
                    </IconButton> */}
                      <IconButton icon={RiEditLine} colorScheme="red">
                        Delete
                      </IconButton>
                    </ButtonGroup>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      </>
    </Page>
  )
}

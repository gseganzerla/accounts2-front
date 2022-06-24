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
  useToast,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { RiEditLine } from 'react-icons/ri'
import { useQuery } from 'react-query'
import { IconButton } from '../../components/IconButton'
import { Page } from '../../components/Page'
import { useDialog } from '../../contexts/Dialog'
import { destroyAccount, fetchAccounts } from '../../services/account'

export default function Index() {
  const {
    isLoading,
    isFetching,
    data: accounts,
  } = useQuery('accounts', fetchAccounts)

  const {
    disclosure: { onOpen },
    state,
    dispatch,
  } = useDialog()

  function handleDestroyAccount(uuid: string) {
    dispatch({
      type: 'dispatchObject',
      payload: { type: destroyAccount, uuid: uuid },
    })

    onOpen()
  }

  const toast = useToast()

  function handleCopyToClipboard(password: string | undefined) {
    if (password) {
      navigator.clipboard.writeText(password)

      try {
        toast({
          title: 'Copied to clipboard sucessfully',
          description: 'Password copied to clipboard',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      } catch (error) {
        toast({
          title: 'Error',
          description: 'An error occurred while copying to clipboard',
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
    }
  }

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
                      {/* <IconButton
                        icon={RiClipboardLine}
                        colorScheme="yellow"
                        onClick={() => handleCopyToClipboard(account.password)}
                      >
                        Copy
                      </IconButton> */}
                      {/* <IconButton icon={RiEditLine} colorScheme="blue">
                      Edit
                    </IconButton> */}
                      <IconButton
                        icon={RiEditLine}
                        colorScheme="red"
                        onClick={() => handleDestroyAccount(account.uuid)}
                      >
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

import {
  ButtonGroup,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { RiAddLine, RiClipboardLine, RiEditLine } from 'react-icons/ri'
import { IconButton } from '../../components/IconButton'
import { Page } from '../../components/Page'

export default function index() {
  return (
    <Page>
      <>
        <Flex justify="space-between" mb="8" align="center">
          <Heading size="md">Accounts</Heading>
          <IconButton icon={RiAddLine}>New Account</IconButton>
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
            <Tr>
              <Td>1</Td>
              <Td>any username</Td>
              <Td>email@email.com</Td>
              <Td>any accounts</Td>
              <Td>
                <ButtonGroup size="sm" isAttached>
                  <IconButton icon={RiClipboardLine} colorScheme="yellow">
                    Copy
                  </IconButton>
                  <IconButton icon={RiEditLine} colorScheme="blue">
                    Edit
                  </IconButton>
                  <IconButton icon={RiEditLine} colorScheme="red">
                    Delete
                  </IconButton>
                </ButtonGroup>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </>
    </Page>
  )
}

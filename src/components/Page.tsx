import { Box, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

interface PageProps {
  children: ReactNode
}

export function Page({ children }: PageProps) {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" px="6">
        <Sidebar />
        <Box flex="1" bg="gray.800" p="8" borderRadius="8">
          {children}
        </Box>
      </Flex>
    </Box>
  )
}

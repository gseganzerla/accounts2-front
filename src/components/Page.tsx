import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Header } from './Header'

interface PageProps {
  children: ReactNode
}

export function Page({ children }: PageProps) {
  return (
    <Box>
      <Header />
    </Box>
  )
}

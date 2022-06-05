import { Stack } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface StackedButtonGroupProps {
  children: ReactNode
}

export function StackedButtonGroup({ children }: StackedButtonGroupProps) {
  return (
    <Stack
      mt="8"
      spacing="4"
      direction={{ base: 'column', lg: 'row' }}
      justify="flex-end"
    >
      {children}
    </Stack>
  )
}

import { Spinner, SpinnerProps } from '@chakra-ui/react'

interface SpinnerSmProps extends SpinnerProps {}

export function SpinnerSm({ ...rest }: SpinnerSmProps) {
  return <Spinner size="sm" color="gray.500" />
}

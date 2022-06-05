import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  label?: string
  name: string
}

export function Input({ label, name, ...rest }: InputProps) {
  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <ChakraInput name={name} id={name} {...rest} />
    </FormControl>
  )
}

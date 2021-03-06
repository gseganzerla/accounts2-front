import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'

interface InputPros extends ChakraInputProps {
  label?: string
  name: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputPros> = (
  { label, name, ...rest },
  ref
) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        ref={ref}
        {...rest}
      />
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)

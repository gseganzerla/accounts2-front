import { useRouter } from 'next/router'
import { FormEvent } from 'react'
import { MutationFunction, useMutation } from 'react-query'
import { queryClient } from '../services/queryClient'

interface UseMutationNamedArgs {
  fn: MutationFunction<any, any>
  query: string
  redirect?: string
}

export const useAsyncMutation = ({
  fn,
  query,
  redirect,
}: UseMutationNamedArgs) => {
  const router = useRouter()

  return useMutation(fn, {
    onSuccess: () => {
      queryClient.invalidateQueries(query)

      if (redirect) {
        router.push(redirect)
      }
    },
  })
}

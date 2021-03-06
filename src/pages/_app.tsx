import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { AuthProvider } from '../contexts/AuthContext'
import { DialogProvider } from '../contexts/Dialog'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawer'
import { queryClient } from '../services/queryClient'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <AuthProvider>
            <DialogProvider>
              <Component {...pageProps} />
            </DialogProvider>
          </AuthProvider>
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp

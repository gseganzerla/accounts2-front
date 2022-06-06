import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/AuthContext'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawer'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp

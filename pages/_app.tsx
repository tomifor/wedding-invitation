import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import 'primeflex/primeflex.min.css';
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return  <ChakraProvider><Component {...pageProps} /></ChakraProvider>
}

export default MyApp

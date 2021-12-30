import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import 'primeflex/primeflex.min.css';
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'

function MyApp ({Component, pageProps}: AppProps) {
  return (
    <div>
      <Head>
        <title>Sofi y Maxi</title>
        <meta name="description" content="Invitación de casamiento"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <ChakraProvider><Component {...pageProps} /></ChakraProvider>
    </div>
  )
}

export default MyApp

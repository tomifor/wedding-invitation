import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import 'primeflex/primeflex.min.css';
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'

function MyApp ({Component, pageProps}: AppProps) {
  return (
    <div>
      <Head>
        <title>Tessy & Marcos</title>
        <meta name="description" content="Invitación de casamiento"/>
        <meta property="og:image" content="https://i.ibb.co/q1GHC61/D93-CA480-328-B-4-C5-D-866-B-8-DFB20-F13-A61.png" />
      </Head>
      <ChakraProvider><Component {...pageProps} /></ChakraProvider>
    </div>
  )
}

export default MyApp

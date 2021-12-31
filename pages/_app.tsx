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
        <meta property="og:image" content="https://i.ibb.co/X87R0Qg/Captura-de-Pantalla-2021-12-30-a-la-s-22-39-00-2.png" />
      </Head>
      <ChakraProvider><Component {...pageProps} /></ChakraProvider>
    </div>
  )
}

export default MyApp

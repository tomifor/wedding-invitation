import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import 'primeflex/primeflex.min.css';
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import Footer from '../src/components/modules/Footer/Footer'
import React from 'react'
import { CONFIG } from '../src/config/config'

function MyApp ({Component, pageProps}: AppProps) {

  const {title, description, metaImagePreview} = CONFIG;

  return (
    <div>
      <Head>
        <title>{`${title} - Invify`}</title>
        <meta name="description" content={description}/>
        <meta property="og:image" content={metaImagePreview} />
      </Head>
      <ChakraProvider><Component {...pageProps} /></ChakraProvider>
      <Footer/>
    </div>
  )
}

export default MyApp

import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import 'primeflex/primeflex.min.css';
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import Footer from '../src/components/modules/Footer/Footer'
import React from 'react'
import { CONFIG } from '../src/config/config';
import { Poppins } from '@next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '700'] })


function MyApp ({Component, pageProps}: AppProps) {

  const {title, description, metaImagePreview} = CONFIG;

  return (
    <div>
      <Head>
        <title>{`${title} - Invify`}</title>
        <meta name="description" content={description}/>
        <meta property="og:image" content={metaImagePreview} />
      </Head>
      <main className={poppins.className}>
        <ChakraProvider><Component {...pageProps} /></ChakraProvider>
      </main>
      <Footer/>
    </div>
  )
}

export default MyApp

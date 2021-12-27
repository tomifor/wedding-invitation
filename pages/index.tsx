import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sofi y Maxi</title>
        <meta name="description" content="Invitación de casamiento"/>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Waterfall&display=swap" rel="stylesheet"/>

      </Head>
      <div className={styles.soon}>
        <Image src={'/undraw_wedding.svg'} height={200} width={200}/>
        <h1 className={styles.title}>Coming soon!</h1>
        <h2 className={styles.subtitle}>Sofi y Maxi</h2>
      </div>
    </div>
  )
}

export default Home

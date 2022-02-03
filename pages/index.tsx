import type { NextPage } from 'next'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
   <Box display={'flex'} justifyContent={'center'} paddingTop={'60px'} minH={'100vh'} alignItems={'center'}>
     <Image src={'/invify-logo.png'} width={300} height={116} alt={'Logo invify'}/>
   </Box>
  )
}

export default Home

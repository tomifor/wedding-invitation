import React from 'react';
import { Box } from '@chakra-ui/react';
import Image from 'next/image'

const Footer = () => {
  const URL = 'https://invify.ar';

  return (
    <footer>
      <Box p={'8px 6px 3px 8px'}>
        <div className={'flex justify-content-center align-items-center'}>
          <p className={'mt-1 mb-1'}>
            <span className={'mr-1'}>Hecho por</span>
          </p>
          <a href={URL} target={'_blank'} rel="noopener noreferrer">
            <Image src={'/invify-logo.png'}
                   height={15} width={39}
                   alt={'Invify'}/>
          </a>
        </div>
      </Box>
    </footer>
  )
}

export default Footer;

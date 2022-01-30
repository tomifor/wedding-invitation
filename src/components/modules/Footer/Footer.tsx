import React from 'react';
import { Box } from '@chakra-ui/react';
import Image from 'next/image'

const Footer = () => {
  const URL = 'https://invify.ar';

  return (
    <footer>
      <Box p={'8px 6px 3px 6px'}>
        <p><span style={{marginBottom: '6px'}}>Hecho por</span>
          <a href={URL} target={'_blank'} rel="noopener noreferrer">
            <span className={'footer-logo'}>
              <Image src={'/invify-logo.png'}
                     height={15} width={39}
                     alt={'Invify'}/>
            </span>
          </a>
        </p>
      </Box>
    </footer>
  )
}

export default Footer;

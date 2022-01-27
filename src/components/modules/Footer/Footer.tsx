import React from 'react';

const Footer = () => {
  const URL = 'https://www.instagram.com/tomifor/';

  return (
    <footer>
      <p>Desarrollador por <a href={URL} target={'_blank'} rel="noopener noreferrer">Invify</a></p>
    </footer>
  )
}

export default Footer;

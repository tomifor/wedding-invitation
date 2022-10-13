import React, { useEffect, useState } from 'react';

const Rspv = () => {
  const [dimensions, setDimensions] = useState<{width: string, height: string} | undefined>();

  useEffect(() => {
    if(window) {
      setDimensions({width: `${window?.innerWidth}px`, height: `${window?.innerHeight}px`})
    }
  }, [])

  if(!dimensions) {return <div/>}

  return (
    <div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScr5zOuE_3Ut345I26pm0NahPK6c923-s3XMo0jVaxznJL1eA/viewform?embedded=true"
        width={dimensions.width} height={dimensions.height}>Cargando…
      </iframe>
    </div>
  )
}

export default Rspv;

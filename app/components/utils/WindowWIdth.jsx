'use client'
import React, { useState } from 'react'

const WindowWIdth = () => {

    const [windowWidth, setWindowWidth] = useState(null);

    React.useEffect(() => {
      const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
      };

      // Call updateWindowWidth initially and add event listener for window resize
      updateWindowWidth();
      window.addEventListener('resize', updateWindowWidth);

      // Remove event listener on component unmount
      return () => {
        window.removeEventListener('resize', updateWindowWidth);
      };
    }, []);

    return windowWidth

}

export default WindowWIdth
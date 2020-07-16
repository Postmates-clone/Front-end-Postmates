/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  const sizes = {
    desktop: 1060,
    tablet: 1059,
    mobile: 767,
  };

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [
    getSize,
    isClient,
    sizes.desktop,
    sizes.mobile,
    sizes.tablet,
    windowSize.width,
  ]); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

export default useWindowSize;

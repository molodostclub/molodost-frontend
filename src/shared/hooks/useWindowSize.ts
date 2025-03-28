import { useEffect, useState } from 'react';

import { Breakpoint } from '@/styles';

type WindowSize = {
  width: number | null;
  height: number | null;
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: null,
    height: null,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export function useIsTablet() {
  const { width } = useWindowSize();

  return width ? width >= Breakpoint.tablet : false;
}

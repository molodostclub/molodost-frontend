import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { scopeDesktop, scopeMobile } from './Scope.css';

const useWindowWidth = () => {
  const [width, setWidth] = useState<number | null>(null);

  const updateWidth = () => {
    setWidth(window?.innerWidth ?? null);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);

    const timeoutId = setTimeout(() => {
      updateWidth();
    }, 50);

    return () => {
      window.removeEventListener('resize', updateWidth);
      clearTimeout(timeoutId); // Исправление утечки памяти: очистка таймера при размонтировании
    };
  }, []);

  return width;
};

export const ScopeMobile: FC<PropsWithChildren> = ({ children }) => {
  return <div className={scopeMobile}>{children}</div>;
};

export const ScopeDesktop: FC<PropsWithChildren> = ({ children }) => {
  return <div className={scopeDesktop}>{children}</div>;
};
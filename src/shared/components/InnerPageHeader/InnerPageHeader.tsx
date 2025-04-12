import { FC, useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import { MenuOverlay } from './MenuOverlay';
import { HeaderMenuList } from './HeaderMenuList';
import * as styles from './InnerPageHeader.css';
import Link from 'next/link';

const lines = Array.from({ length: 3 }).map((_, i) => (
  <div key={i} className={styles.line} />
));

type Props = {
  isMainPage?: boolean;
};

export const InnerPageHeader: FC<Props> = ({ isMainPage = false }) => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (opened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [opened]);

  const handleOpen = () => {
    setOpened(true);
  };

  const handleClose = useCallback(() => {
    setOpened(false);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/" className={styles.smallLogoWrapper}>
            <Image
              width={175}
              height={150}
              alt="Молодость на Алтае"
              src="/icons/logo-dark.svg"
            />
          </Link>

          <div className={styles.headerLeftWrapper}>
            <Link href="/" className={styles.logoWrapper}>
              <Image
                width={168}
                height={146}
                alt="Молодость на Алтае"
                src="/icons/logo-white-clean.svg"
                className={styles.logoIcon}
              />
            </Link>

            <div className={cn(styles.headerMenu, styles.indentTop)} >
              <HeaderMenuList />
            </div>
          </div>

          <button
            type="button"
            aria-label="Open menu button"
            onClick={handleOpen}
            className={cn(styles.button, styles.indentTop)}
          >
            {lines}
          </button>
        </div>
        <MenuOverlay opened={opened} onClose={handleClose} />
      </header>
    </>
  );
};

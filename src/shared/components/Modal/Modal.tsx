import { FC, PropsWithChildren, useEffect } from 'react';

import * as styles from './Modal.css'

type Props = {
  isOpen: boolean,
  closeModal: () => void
}

export const Modal: FC<PropsWithChildren<Props>> = ({ children, isOpen, closeModal }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    document.documentElement.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  return (
    <>
      {isOpen && <div className={styles.modalOverlay}>
        <div className={styles.modalWrapper}>
          {children}
          <button onClick={closeModal} className={styles.modalCloseBtn}><span>&#10006;</span></button>
        </div>
      </div>}
    </>
  )
}

import { FC, PropsWithChildren } from 'react';
import * as styles from './Container.css';
import cn from 'classnames';

export const Container: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};

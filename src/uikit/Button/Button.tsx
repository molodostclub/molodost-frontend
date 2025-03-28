import { FC, PropsWithChildren } from 'react';
import * as styles from './Button.css'
import Link from 'next/link';
import { icons } from '../icons';
import cx from 'classnames';

interface ButtonProps {
  direction?: 'left' | 'right',
  color?: 'brand' | 'white',
  size?: 'small' | 'large',
  isLogo?: boolean
}

/**
 * Arrow pointing left or right
 */
export const ArrowButton: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  direction = 'left',
  color = 'brand',
  size = 'large',
  isLogo = false,
}) => {
  const IconComponent = direction === 'left' ? icons.arrowLeft : icons.arrowRight;
  const colorStyle = styles.twbColor[color];

  return (
    <div className={cx(styles.twbContainer, colorStyle)}>
      <div className={cx(styles.twbRectangle[direction], styles.twbSize[size], colorStyle, isLogo && styles.twbLogo)}>
        <IconComponent className={cx(styles.twbArrow[direction], styles.twbArrowSize[size], colorStyle)} />
        {children}
      </div>
    </div>
  )
}

export const BrandLink: FC<PropsWithChildren<ButtonProps & {
  linkTo: string,
}>> = ({ linkTo, children, ...rest }) => {
  return (
    <Link href={linkTo}>
      <ArrowButton {...rest}>{children}</ArrowButton>
    </Link>
  )
}
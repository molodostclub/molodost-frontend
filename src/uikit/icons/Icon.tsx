import { FC, PropsWithChildren } from 'react';
import { icons } from './icons';

interface Props {
  name: keyof typeof icons,
  className?: string
}

export const Icon: FC<PropsWithChildren<Props>> = ({
  name,
  ...rest
}) => {
  if (!icons[name]) {
    console.warn(`Icon with name ${name} is not exists`);
    return <></>;
  }

  const Component = icons[name] as any;

  return (
    <Component
      className="w1d1-icon"
      {...rest}
    />
  );
};
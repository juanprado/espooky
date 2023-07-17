import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';

import styles from './link-button.module.scss';

type LinkButtonProps = {
  className?: string
  children: ReactNode
  theme: 'dark' | 'light'
  target?: string
  rel?: string
}

const LinkButton = (props: LinkProps & LinkButtonProps) => {
  const { className, theme, ...otherProps } = props;

  return (
    <Link
      className={clsx(styles.root, className, { [styles.light]: theme === 'dark'})}
      {...otherProps}
    />
  );
};

LinkButton.defaultProps = {
  className: '',
  theme: 'light',
}

export default LinkButton;
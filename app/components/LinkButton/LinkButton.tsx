import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';

import styles from './link-button.module.scss';

type LinkButtonProps = {
  className?: string
  children: ReactNode
}

const LinkButton = (props: LinkProps & LinkButtonProps) => {
  const { className, ...otherProps } = props;

  return (
    <Link
      className={clsx(className, styles.root)}
      {...otherProps}
    />
  );
};

LinkButton.defaultProps = {
  className: ''
}

export default LinkButton;
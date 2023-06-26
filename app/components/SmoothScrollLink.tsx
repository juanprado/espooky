'use client';

import { useCallback, MouseEvent, ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

type ScrollLinkProps = {
  className?: string
  children: ReactNode
  onClick?: () => void;
};

const SmoothScrollLink = (props: LinkProps & ScrollLinkProps) => {
  const { onClick, ...otherProps } = props;

  const handleScroll = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);

    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    if (onClick) onClick(event);
  }, [onClick])

  return (
    <Link {...otherProps} onClick={handleScroll} />
  );
};

export default SmoothScrollLink;
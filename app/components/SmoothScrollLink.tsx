'use client';

import { useCallback, MouseEvent, ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

type ScrollLinkProps = {
  className?: string,
  children: ReactNode,
};

const SmoothScrollLink = (props: LinkProps & ScrollLinkProps) => {
  const handleScroll = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);

    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  }, [])

  return (
    <Link {...props} onClick={handleScroll} />
  );
};

export default SmoothScrollLink;
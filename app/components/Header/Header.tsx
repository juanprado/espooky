'use client';

import clsx from 'clsx';
import { useState, useRef, useCallback, useEffect } from 'react';

import throttle from 'app/helpers/throttle';

import SmoothScrollLink from 'app/components/SmoothScrollLink';
import initialSections from 'app/sections';
import styles from './header.module.scss';

type Section = {
  section: string
  theme: string
  top?: number
  bottom?: number
}

const Header = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const sectionsData = useRef<Section[]>(initialSections);
  const [activeSection, setActiveSection] = useState<Section>(initialSections[0]);

  const setSectionData = useCallback(() => {
    sectionsData.current = initialSections.map((section) => {
      const elem = document.querySelector(`[data-section=${section.section}]`);

      if (elem) {
        const { top, bottom } = elem.getBoundingClientRect();
        const offsetTop = top + window.pageYOffset;
        const offsetBottom = bottom + window.pageYOffset;


        return { ...section, top: offsetTop, bottom: offsetBottom };
      }

      return section;
    })
  }, [])

  const getActiveSection = useCallback(() => {
    if (headerRef.current) {
      const { bottom } = headerRef.current.getBoundingClientRect();
      const headerBottom = bottom + window.pageYOffset;
  
      const activeSection = sectionsData.current.find((sectionObj) => {
        const { top, bottom } = sectionObj;

        return headerBottom < (bottom || 0) && headerBottom > (top || 0);
      });

      if (activeSection) setActiveSection(activeSection);
    }
  }, []);

  useEffect(() => {
    const header = headerRef.current;

    if (header) {
      setSectionData();
      getActiveSection();
      window.addEventListener('scroll', throttle(getActiveSection, 200));
      window.addEventListener('resize', throttle(setSectionData, 200));
    }

    () => {
      window.removeEventListener('scroll', throttle(getActiveSection, 200));
      window.removeEventListener('resize', throttle(setSectionData, 200));
    }
  }, [setSectionData, getActiveSection]);

  return (
    <header
      className={clsx(styles.header, { [styles.dark]: activeSection.theme === 'light' })}
      ref={headerRef}
    >
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <SmoothScrollLink
              className={styles.link}
              href="#details"
              scroll={false}
            >
              Details
            </SmoothScrollLink>
          </li>
          <li className={styles.item}>
            Rsvp
          </li>
          <li className={styles.item}>
            <SmoothScrollLink
              className={styles.link}
              href="#attire-gallery"
              scroll={false}
            >
              Attire Gallery
            </SmoothScrollLink>
          </li>
          <li className={styles.item}>
            Things To Do
          </li>
          <li className={styles.item}>
            Gifts
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
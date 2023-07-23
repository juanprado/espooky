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
  const [showNav, toggleNav] = useState(false);

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
      window.addEventListener('scrollend', setSectionData);
    }

    () => {
      window.removeEventListener('scroll', throttle(getActiveSection, 200));
      window.removeEventListener('resize', throttle(setSectionData, 200));
      window.removeEventListener('scrollend', setSectionData);
    }
  }, [setSectionData, getActiveSection]);

  return (
    <header
      className={clsx(
        styles.header,
        { [styles.dark]: activeSection.theme === 'light' }
      )}
      ref={headerRef}
    >
      <div className={styles.menuContainer}>
        <button
          className={clsx(styles.menuButton, { [styles.withOpenNav]: showNav })}
          onClick={() => toggleNav(!showNav)}
        >
          <span className={styles.menuText}>
            {showNav ? 'Close' : 'Menu'}
          </span>
          <div className={styles.menuIcon}>
            <span />
            <span />
            <span />
          </div>
        </button>
      </div>
      <nav className={clsx(styles.nav, { [styles.showNav]: showNav })}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <SmoothScrollLink
              className={styles.link}
              href="#details"
              scroll={false}
              onClick={() => toggleNav(false)}
            >
              Details
            </SmoothScrollLink>
          </li>
          <li className={styles.item}>
            <SmoothScrollLink
              className={styles.link}
              href="#attire-gallery"
              scroll={false}
              onClick={() => toggleNav(false)}
            >
              Attire Theme
            </SmoothScrollLink>
          </li>
          <li className={styles.item}>
            <SmoothScrollLink
              className={styles.link}
              href="#things-to-do"
              scroll={false}
              onClick={() => toggleNav(false)}
            >
              Things To Do
            </SmoothScrollLink>
          </li>
          <li className={styles.item}>
            <SmoothScrollLink
              className={styles.link}
              href="#gifts"
              scroll={false}
              onClick={() => toggleNav(false)}
            >
              Gifts
            </SmoothScrollLink>
          </li>
          <li className={styles.item}>
            <a
              className={styles.rsvpLink}
              href="https://biancaandfernando.rsvpify.com"
              rel="noreferrer noopener"
            >
              RSVP
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
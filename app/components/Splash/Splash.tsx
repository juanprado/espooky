import { useState } from 'react';
import clsx from 'clsx';

import { lordish } from 'app/fonts';

import styles from './splash.module.scss';

const Splash = () => {
  const [isAnimating, setAnimation] = useState(false);

  return (
    <section
      className={styles.root}
      onClick={() => setAnimation(!isAnimating)}
    >
      <div
        className={clsx(styles.background, { [styles.splashBackground]: isAnimating })}
      />
      <h1
        className={clsx(lordish.className, styles.title, { [styles.splashTitle]: isAnimating })}
      >
        Bianca <br />+ Fernando
      </h1>
    </section>
  );
}

export default Splash;
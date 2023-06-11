import { useState } from 'react';
import clsx from 'clsx';

import { lordish } from 'app/fonts';

import styles from './splash.module.scss';

type SplashProps = {
  id: string,
}

const Splash = (props: SplashProps) => {
  const [isAnimating, setAnimation] = useState(false);

  return (
    <section
      className={styles.root}
      onClick={() => setAnimation(!isAnimating)}
      id={props.id}
      data-section={props.id}
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
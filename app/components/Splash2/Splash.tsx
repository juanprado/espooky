import { useState } from 'react';
import clsx from 'clsx';

import { lordish } from 'app/fonts';

import styles from './splash.module.scss';

type SplashProps = {
  id: string,
}

const Splash = (props: SplashProps) => (
  <section
    className={styles.root}
    id={props.id}
    data-section={props.id}
  >
    <div className={styles.square21}>
      <div className={styles.square20}>
        <div className={styles.square19}>
          <div className={styles.square18}>
            <div className={styles.square17}>
              <div className={styles.square16}>
                <div className={styles.square15}>
                  <div className={styles.square15}>
                    <div className={styles.square14}>
                      <div className={styles.square13}>
                        <div className={styles.square12}>
                          <div className={styles.square11}>
                            <div className={styles.square10}>
                              <div className={styles.square9}>
                                <div className={styles.square8}>
                                  <div className={styles.square7}>
                                    <div className={styles.square6}>
                                      <div className={styles.square5}>
                                        <div className={styles.square4}>
                                          <div className={styles.square3}>
                                            <div className={styles.square2}>
                                              <div className={styles.square1}>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 className={clsx(lordish.className, styles.title)}>
      Bianca <br />+ Fernando
    </h1>
  </section>
);

export default Splash;
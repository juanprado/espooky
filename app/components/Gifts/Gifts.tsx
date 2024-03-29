import clsx from 'clsx';

import { lordish } from 'app/fonts';
import LinkButton from 'app/components/LinkButton';

import styles from './gifts.module.scss';

type GiftsProps = {
  id: string,
}

const Gifts = (props: GiftsProps) => (
  <section
    className={styles.root}
    id={props.id}
    data-section={props.id}
  >
    <div className={styles.container}>
      <h1 className={clsx(lordish.className, styles.title)}>
        Gifts
      </h1>
      <div className={styles.body}>
        <div className={styles.content}>
          <video
            autoPlay
            className={styles.video}
            loop
            muted
            playsInline
          >
            <source src="/the-addams-family-thing.webm" type="video/webm" />
            <source src="/the-addams-family-thing.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.content}>
          <h2 className={styles.subtitle}>Honeymoon Fund</h2>
          <p className={styles.text}>
            We are fortunate to have everything we need in our home, and your presence at the wedding is the best gift we could ask for. If you would still like to gift us, please consider contributing to our honeymoon trip to Japan.
          </p>
          <LinkButton
            theme="dark"
            href="http://www.zola.com/registry/bianca-fernando"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contribute
          </LinkButton>
        </div>
      </div>
    </div>
  </section>
);

export default Gifts;
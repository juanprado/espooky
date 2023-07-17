import clsx from 'clsx';

import { lordish } from 'app/fonts';
import LinkButton from 'app/components/LinkButton';

import styles from './details.module.scss';

type DetailsProps = {
  id: string,
}

const Details = (props: DetailsProps) => (
  <section
    className={styles.root}
    id={props.id}
    data-section={props.id}
  >
    <div className={styles.container}>
      <h1 className={clsx(lordish.className, styles.title)}>
        Details
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
            <source src="/candlestick-hands.webm" type="video/webm" />
            <source src="/candlestick-hands.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.content}>
          <h2 className={styles.subtitle}>When</h2>
          <p className={styles.text}>
            Friday, October 13th, 2023<br/>
            6:00pm - 11:00pm
          </p>
          <h2 className={styles.subtitle}>Where</h2>
          <p className={styles.text}>
            <a
              className={styles.link}
              href="https://goo.gl/maps/5dBk33rXYhEn1StW6"
              rel="noreferrer noopener"
              target="_blank"
            >
              The Bier Haus at Radegast Hall
            </a>
            <br/>
            113 N 3rd St<br/>
            Brooklyn, NY 11249
          </p>
          <LinkButton
            className={styles.rsvpLink}
            href="https://biancaandfernando.rsvpify.com"
            rel="noreferrer noopener"
          >
            RSVP
          </LinkButton>
          <p className={styles.disclaimer}>
            Please note this is an adults-only celebration
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Details;
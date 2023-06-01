import clsx from 'clsx';

import { lordish } from 'app/fonts';

import styles from './placeholder.module.css';

type PlaceholderProps = {
  title: string
}

const Placeholder = (props: PlaceholderProps) => {
  const { title } = props;

  return (
    <section className={styles.root}>
      <video
        autoPlay
        className={styles.video}
        loop
        muted
        playsInline
      >
        <source src="/dancing-skeletons.webm" type="video/webm" />
        <source src="/dancing-skeletons.mp4" type="video/mp4" />
      </video>
      <div className={styles.content}>
        <h1 className={clsx(lordish.className, styles.title)}>
          {title}
        </h1>
      </div>
    </section>
  );
};

export default Placeholder;
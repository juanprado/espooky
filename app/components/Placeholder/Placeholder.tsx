import { lordish } from 'app/fonts';

import styles from './placeholder.module.css';

type PlaceholderProps = {
  title: string,
}

const Placeholder = (props: PlaceholderProps) => (
  <section>
    <video
      className={styles.video}
      autoPlay
      playsInline
      loop
      muted
    >
      <source src="/dancing-skeletons.webm" type="video/webm" />
      <source src="/dancing-skeletons.mp4" type="video/mp4" />
    </video>
    <div className={styles.content}>
      <h1 className={`${lordish.className} ${styles.title}`}>
        {props.title}
      </h1>
    </div>
  </section>
)

export default Placeholder;
import styles from './placeholder.module.css';
import { lordish } from '../../fonts';

type PlaceholderProps = {
  title: string,
}

const Placeholder = (props: PlaceholderProps) => (
  <div className={styles.root}>
    <h1 className={`${lordish.className} ${styles.title} `}>
      {props.title}
    </h1>
  </div>
)

export default Placeholder;
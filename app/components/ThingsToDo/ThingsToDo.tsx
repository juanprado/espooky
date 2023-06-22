import clsx from 'clsx';

import { lordish } from 'app/fonts';

import favorites from './favorites';
import styles from './things-to-do.module.scss';

type ThingsToDoProps = {
  id: string,
}

const ThingsToDo = (props: ThingsToDoProps) => (
  <section
    className={styles.root}
    id={props.id}
    data-section={props.id}
  >
    <header className={styles.header}>
      <h1 className={clsx(lordish.className, styles.title)}>
        Things To Do
      </h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut ante id lacus laoreet semper non vel urna.
      </p>
    </header>
    <div className={styles.body}>
      <ul className={styles.list}>
        {favorites.map(favorite => (
          <li className={styles.listItem}>
            <div className={styles.image} />
            <h3 className={styles.location}>{favorite.location}</h3>
            <h2 className={styles.favorite}>{favorite.title}</h2>
            <p className={styles.description}>{favorite.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ThingsToDo;
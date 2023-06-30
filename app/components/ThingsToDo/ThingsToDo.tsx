import Image from 'next/image';
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
        If you're traveling from afar and looking for things to do, these are some of our favorite places in New York City.
      </p>
    </header>
    <div className={styles.body}>
      <ul className={styles.list}>
        {favorites.map(favorite => (
          <li className={styles.listItem}>
            <a
              className={styles.link}
              href={favorite.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                className={styles.image}
                key={favorite.image}
                src={`/things-gallery/${favorite.image}.jpg`}
                alt={favorite.title}
                width={300}
                height={358.378}
              />
            </a>
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
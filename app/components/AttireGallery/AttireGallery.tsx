import Image from 'next/image';
import clsx from 'clsx';

import { lordish } from 'app/fonts';

import gallery, { Gallery } from './gallery';
import styles from './attire-gallery.module.scss';

const chunk = (inputArray: any[], itemsPerChunk: number) => (
  inputArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / itemsPerChunk);

    resultArray[chunkIndex] = [].concat((resultArray[chunkIndex] || []), item);

    return resultArray
  },
[]));

const AttireGallery = () => {
    const columns: Gallery[] = chunk(gallery, 3);

    return (
      <section className={styles.root}>
        <h1 className={clsx(lordish.className, styles.title)}>
          Attire Theme
        </h1>
        <h2 className={styles.subtitle}>
          Espooky Eleganza
        </h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut ante id lacus laoreet semper non vel urna. Nam justo felis, dapibus eu orci iaculis, fringilla tempor odio.
        </p>
        <ul className={styles.list}>
          {gallery.map(image => (
            <li className={styles.item}>
              <img
                className={styles.image}
                key={image.src}
                src={`/attire-gallery/${image.src}.jpg`}
                alt={image.alt}
                width={1500}
                height={1798}
              />
            </li>
          ))}
        </ul>
      </section>
    );
  };

export default AttireGallery;
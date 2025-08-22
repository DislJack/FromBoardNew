import styles from './garantee-card.module.css';

type TGaranteeCard = {
  src: string;
  caption: string;
}

function GaranteeCard({src, caption}: TGaranteeCard) {
  return (
    <figure className={styles.container}>
      <img className={styles.image} src={src} alt={caption} data-testid='garantee'/>
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  )
}

export default GaranteeCard;